// Author: Clara Ko
// Co-authored / refactored by: James Tacker

let fs = require('fs');
let axios = require('axios');
let cheerio = require('cheerio');
let fastcsv = require('fast-csv');
let moment = require('moment');

// github actions package
// javascript
const core = require('@actions/core');

let wiki_url = 'https://wiki.saucelabs.com';
let docs_url = 'http://127.0.0.1:8000/';
let result = {};
let wiki_result = {};
let wiki_map = {};
let matched_result = {};
let matched_list = [];
let unmatched_result = {};
let broken_result = {};

let page_count = 0;
let wiki_count = 0;

let ref_map = {};

let args = process.argv;
let joburl = args[args.length-1];
// https://gitlab.prod.sjc3.saucelabs.net/clara.ko/sauce-docs-checker/-/jobs/4314130
console.log(joburl)
if(joburl.includes('index.js')) joburl = null

run();

async function run() {
  console.log(`**** PARSING ${docs_url} ****`)
  await parse_docs(docs_url); // no logging
  await parse_wiki_map();
  await match_wiki_links();

  let summary_str = get_summary()
  let ref_str = get_references(ref_map)
  let matched_str = get_links(matched_result,'Matched')
  let unmatched_str = get_links(unmatched_result,'Unmatched')
  let broken_str = get_links(broken_result,'Broken')

  if(joburl!==null) {
    let arr = [ref_str,matched_str,unmatched_str,broken_str]
    await exit_code(summary_str,arr,Object.keys(ref_map).length)
  }
}

async function exit_code(summary_str,arr,broken_count) {
  let date_str = moment().format('LL')
  console.log(date_str)
  if(broken_count>0) core.setFailed(`Action failed with error ${broken_count} Broken Links`);
}

/* This function was no longer needed as results output in pipeline and prevent merging */

// async function send_slack(summary_str,arr,broken_count) {
//   let url = process.env.SLACK_LINK
//   let date_str = moment().format('LL')
//   console.log(date_str)
//   let color = "#36a64f"
//   if(broken_count>0) color = "#ff0f0f"
//   let obj = {
//     "attachments": [
//       {
//         "color": color,
//         "blocks": [
//           {
//       			"type": "header",
//       			"text": {
//       				"type": "plain_text",
//       				"text": date_str,
//       				"emoji": true
//       			}
//       		},
//           {
//             "type": "section",
//             "text": {
//               "type": "mrkdwn",
//               "text": summary_str
//             }
//           },
//           {
//             "type": "section",
//             "text": {
//               "type": "mrkdwn",
//               "text": `<${joburl}|See Details>`
//             }
//           }
//         ]
//       }
//     ]
//   }
//   try {
//     let res = await axios.post(url, obj);
//     console.log(res.statusText)
//   }
//   catch(err) {
//     console.log(err)
//   }
// }

async function match_wiki_links() {
  let links = Object.keys(wiki_result);
  for(let i=0;i<links.length;i++) {
    let from = links[i];
    let to = wiki_map[from];
    if(to!==undefined) {
      // console.log(from,'=>',to);
      matched_result[from] = to;
      matched_list.push({from:from,to:to});
    }
    else {
      unmatched_result[from] = from;
    }
  }
}

function get_summary() {
  let str = `*${Object.keys(ref_map).length} docs pages broken*\n`+
      `- docs pages parsed = ${page_count}\n`+
      `- wiki ref count = ${wiki_count}\n`+
      `\t- matched = ${Object.keys(matched_result).length}\n`+
      `\t- unmatched = ${Object.keys(unmatched_result).length}\n`+
      `- broken link count = ${Object.keys(broken_result).length}`;
  console.log(str+'\n')
  return str
}

function get_references(map) {
  let keys = Object.keys(map)
  if(keys.length===0) return null
  let str = `************************************\n`
  str += `**** REFERENCES ****\n`
  for(let i=0;i<keys.length;i++) {
    let key = keys[i];
    str += `${key}\n`
    let list = map[key];
    for(let j=0;j<list.length;j++) {
      let item = list[j];
      let match = matched_result[item.to]
      let match_str = '| UNMATCHED'
      if(match!==undefined) match_str = `=> ${match}`
      str += `\t${item.type} | ${item.text} | ${item.to} ${match_str}\n`
    }
  }
  console.log(str)
  return str
}

function get_links(map,title) {
  let keys = Object.keys(map)
  if(keys.length===0) return null
  let str = `************************************\n`
  str += `***** ${title} *****\n`
  for(let i=0;i<keys.length;i++) {
    let key = keys[i];
    let value = map[key];
    if(key===value) str += `${key}\n`
    else str += `${key}\n\t=> ${value}\n`
  }
  console.log(str)
  return str
}

async function parse_wiki_map() {
  let API_BASE_URL = `https://raw.githubusercontent.com/`;
  let url = API_BASE_URL+`saucelabs/sauce-docs/fix-link-checker-workflow/tests/sauce-docs-checker/map.conf`;
  let res = await axios.get(url);
  let text = res.data;
  // console.log(text);
  let arr = text.split('\n');
  for(let i=0;i<arr.length;i++) {
    let line = arr[i];
    if(line.startsWith('    /')) {
      line = line.trim().replace(';','').replace('\t',' ').replace(/\s+/g,' ');
      // console.log(line)
      let map = line.split(' ');
      let from = wiki_url + map[0];
      let to = 'https://' + map[1];
      wiki_map[from] = to;
      // console.log(from,'=>',to);
    }
  }
}

async function parse_docs(url,text=null,parent_url=null) {
  url = url.split('#')[0]
  let arr = result[url];
  if(arr!==undefined) return;
  page_count++;
  // console.log(url);
  result[url] = arr = [];
  try {
    let response = await axios.get(url);
    let $ = cheerio.load(response.data);
    // console.log(response.data)
    links = $('a');
    $(links).each(function(i, link) {
      let t = $(link).text();
      let u = $(link).attr('href');
      if(u!==undefined) {
        if(u.startsWith('/')&&!u.endsWith('.mp4')) {
          u = docs_url.substring(0,docs_url.length-1)+u;
        }
        if(u.startsWith(docs_url)) arr.push({text:t,url:u});
        if(u.startsWith('https://wiki.saucelabs.com')) {
          wiki_count++;
          wiki_result[u] = u;
          let list = ref_map[url];
          if(list===undefined) {
            list = ref_map[url] = []
          }
          list.push({type:'WIKI',text:t,to:u})
          // console.log('  ','WIKI',t,'|',u);
        }
      }
    });
    for(let i=0;i<arr.length;i++) {
      let link = arr[i];
      await parse_docs(link.url,link.text,url);
    }
  }
  catch(err) {
    broken_result[url] = url;
    let list = ref_map[parent_url]
    if(list===undefined) {
      list = ref_map[parent_url] = [];
    }
    list.push({type:'BROKEN',text:text,to:url})
    // console.log('  ',err.response.status,text,'|',url);
  }
}

function writeCSVFile(path,filename,data) {
  makeDirs(path);
  const ws = fs.createWriteStream(path+'/'+filename);
  fastcsv.write(data, {headers:true}).pipe(ws);
  // console.log('Writing '+filename);
}

function makeDirs(path) {
  let arr = path.split('/');
  let dir = '';
  for(let i=0;i<arr.length;i++) {
    if(i===0) dir = arr[i];
    else dir = dir+'/'+arr[i];
    try {
      fs.mkdirSync(dir);
    } catch(err) {
      // do nothing
    }
  }
}
