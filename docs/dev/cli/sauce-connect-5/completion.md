---
id: completion
title: sc completion
sidebar_label: sc completion
---

Generate an autocompletion script for `bash`, `zsh`, `fish` and `powershell` shells. See each sub-command's help for details on how to use the generated script.

## Usage

```bash
$ sc completion [OPTIONS]
```

## Options

### <span className="cli">bash</span>

<div className="cli-desc">

#### Linux

```
sc completion bash > /etc/bash_completion.d/sc
```

#### macOS

```
sc completion bash > /usr/local/etc/bash_completion.d/sc
```

</div>

### <span className="cli">zsh</span>

<div className="cli-desc">

1. If shell completion is not already enabled in your environment, enable it by executing the following once:

```
echo "autoload -U compinit; compinit" >> ~/.zshrc
```

2. To load completions for each session, execute once:

```
sc completion zsh > "${fpath[1]}/_sc"
```

3. Start a new shell to apply this setup.

</div>

### <span className="cli">fish</span>

<div className="cli-desc">

```
sc completion fish | source
```

To load completions for each session, execute once:

```
sc completion fish > ~/.config/fish/completions/sc.fish
```

</div>

### <span className="cli">Powershell</span>

<div className="cli-desc">

```
sc completion powershell | Out-String | Invoke-Expression
```

To load completions for every new session, run the following and then source this file from your Powershell profile:

```
sc completion powershell > sc.ps1
```

</div>

## Additional Resources

- [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect-5/installation/).
