#!/usr/bin/env node

import fs from 'fs';

const ORG = 'saucelabs';

const TOOLS = [
  {
    name: 'Cypress',
    runnerRepo: 'sauce-cypress-runner',
    pkgField: 'cypress',
    yamlKey: 'cypress',
    docTable: 'docs/web-apps/automated-testing/cypress.md',
    yamlFiles: ['docs/web-apps/automated-testing/cypress/yaml/v1.md'],
  },
  {
    name: 'Playwright',
    runnerRepo: 'sauce-playwright-runner',
    pkgField: 'playwright',
    yamlKey: 'playwright',
    docTable: 'docs/web-apps/automated-testing/playwright.md',
    yamlFiles: [
      'docs/web-apps/automated-testing/playwright/yaml.md',
      'docs/web-apps/automated-testing/cucumberjs-playwright/yaml.md',
    ],
  },
  {
    name: 'TestCafe',
    runnerRepo: 'sauce-testcafe-runner',
    pkgField: 'testcafe',
    yamlKey: 'testcafe',
    docTable: 'docs/web-apps/automated-testing/testcafe.md',
    yamlFiles: ['docs/web-apps/automated-testing/testcafe/yaml.md'],
  },
];

// ---------- helpers ----------

const clean = (v) => String(v ?? '').trim().replace(/^[\^~v]/, '');

function cmpSemver(a, b) {
  const pa = a.split('.').map((n) => parseInt(n, 10) || 0);
  const pb = b.split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0;
    const y = pb[i] || 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}

function ordinal(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formatEol(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const d = date.getDate();
  return `${months[date.getMonth()]} ${d}${ordinal(d)}, ${date.getFullYear()}`;
}

function tdInner(td) {
  return td
    .replace(/<td[^>]*>/, '')
    .replace(/<\/td>/, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

function setTdInner(td, value) {
  return td.replace(/(<td[^>]*>)[\s\S]*?(<\/td>)/, `$1${value}$2`);
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return res.text();
}

async function getRunnerData(tool) {
  const base = `https://raw.githubusercontent.com/${ORG}/${tool.runnerRepo}/main`;
  const pkg = JSON.parse(await fetchText(`${base}/package.json`));
  const version = clean(
    (pkg.dependencies && pkg.dependencies[tool.pkgField]) ||
    (pkg.devDependencies && pkg.devDependencies[tool.pkgField]) ||
    '',
  );
  const node = clean(await fetchText(`${base}/.nvmrc`));
  if (!version) throw new Error(`Could not find "${tool.pkgField}" in ${tool.runnerRepo}/package.json`);
  if (!node) throw new Error(`Could not read .nvmrc in ${tool.runnerRepo}`);
  return { version, node };
}

/**
 * Prepend a new <tbody> to the platform table.
 * Carries OS + browser cells over from the existing top block; only the
 * version, node, and End-of-Life cells change. Returns the current top
 * version so the caller can decide whether the update is needed.
 */
function updateDocTable(file, newVersion, nodeVersion, eolStr) {
  let content = fs.readFileSync(file, 'utf8');

  const eolHeaderIdx = content.indexOf('End of Life');
  if (eolHeaderIdx === -1) throw new Error(`No "End of Life" header found in ${file}`);

  const tbodyIdx = content.indexOf('<tbody>', eolHeaderIdx);
  if (tbodyIdx === -1) throw new Error(`No <tbody> found after header in ${file}`);

  const tbodyEnd = content.indexOf('</tbody>', tbodyIdx) + '</tbody>'.length;
  const firstTbody = content.slice(tbodyIdx, tbodyEnd);

  const firstTr = firstTbody.match(/<tr>[\s\S]*?<\/tr>/)[0];
  const tds = firstTr.match(/<td[^>]*>[\s\S]*?<\/td>/g);
  if (!tds || tds.length < 3) throw new Error(`Unexpected table layout in ${file}`);

  const currentVersion = tdInner(tds[0]);

  // Skip if not strictly newer (idempotent + safe).
  if (cmpSemver(newVersion, currentVersion) <= 0) {
    return { changed: false, currentVersion };
  }

  // tds[0] = version, tds[1] = node, tds[last] = End of Life. Everything else
  // (support ✅, OS rows, browsers) is carried over verbatim.
  const newTds = [...tds];
  newTds[0] = setTdInner(tds[0], newVersion);
  newTds[1] = setTdInner(tds[1], nodeVersion);
  newTds[newTds.length - 1] = setTdInner(tds[tds.length - 1], eolStr);

  let i = 0;
  const newFirstTr = firstTr.replace(/<td[^>]*>[\s\S]*?<\/td>/g, () => newTds[i++]);
  const newTbody = firstTbody.replace(firstTr, newFirstTr);

  // Preserve the indentation of the <tbody> line.
  const lineStart = content.lastIndexOf('\n', tbodyIdx) + 1;
  const indent = content.slice(lineStart, tbodyIdx);

  content =
    content.slice(0, tbodyIdx) + newTbody + '\n' + indent + content.slice(tbodyIdx);

  fs.writeFileSync(file, content);
  return { changed: true, currentVersion };
}

function bumpYaml(file, yamlKey, newVersion) {
  let content = fs.readFileSync(file, 'utf8');
  const re = new RegExp(`(${yamlKey}:\\s*[\\r\\n]+\\s*version:\\s*)([^\\s\\r\\n]+)`, 'g');
  const updated = content.replace(re, `$1${newVersion}`);
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    return true;
  }
  return false;
}

// ---------- main ----------

async function main() {
  const eolStr = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return formatEol(d);
  })();

  const updated = [];

  for (const tool of TOOLS) {
    let data;
    try {
      data = await getRunnerData(tool);
    } catch (err) {
      console.error(`[${tool.name}] ${err.message} — skipping`);
      continue;
    }

    const result = updateDocTable(tool.docTable, data.version, data.node, eolStr);
    if (!result.changed) {
      console.log(`[${tool.name}] up to date (table top ${result.currentVersion} >= ${data.version})`);
      continue;
    }

    for (const yamlFile of tool.yamlFiles) {
      const bumped = bumpYaml(yamlFile, tool.yamlKey, data.version);
      console.log(`[${tool.name}] yaml ${yamlFile}: ${bumped ? 'bumped' : 'no change'}`);
    }

    console.log(`[${tool.name}] ${result.currentVersion} -> ${data.version} (node ${data.node}, EOL ${eolStr})`);
    updated.push({ name: tool.name, version: data.version, prev: result.currentVersion, node: data.node });
  }

  const changed = updated.length > 0;

  const parts = updated.map((u) => `${u.name} ${u.version}`);
  const title = `chore: add ${parts.join(' and ')} to supported versions`;
  const branch =
    'chore/add-' + updated.map((u) => `${u.name.toLowerCase()}-${u.version}`).join('-');

  const body = changed
    ? [
        'Automated update of supported tool versions.',
        '',
        '| Tool | Previous | New | Node | End of Life |',
        '| --- | --- | --- | --- | --- |',
        ...updated.map((u) => `| ${u.name} | ${u.prev} | ${u.version} | ${u.node} | ${eolStr} |`),
        '',
        'Versions read from each runner repo\'s `package.json`; Node read from each runner\'s `.nvmrc`. OS and supported browsers carried over from the previous top row. End of Life = generation date + 1 year.',
        '',
        '_Generated by the `update-supported-versions` workflow._',
      ].join('\n')
    : '';

  // Emit outputs for the PR step.
  const out = process.env.GITHUB_OUTPUT;
  if (out) {
    fs.appendFileSync(out, `changed=${changed}\n`);
    if (changed) {
      fs.appendFileSync(out, `title=${title}\n`);
      fs.appendFileSync(out, `branch=${branch}\n`);
      fs.appendFileSync(out, `body<<__BODY_EOF__\n${body}\n__BODY_EOF__\n`);
    }
  }

  console.log(changed ? `\n${title}\n(branch: ${branch})` : '\nNothing to update.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
