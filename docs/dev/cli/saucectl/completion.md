---
id: completion
title: saucectl completion
sidebar_label: saucectl completion
---

Generate a completion script for `bash`, `zsh`, `fish` and `powershell` shells.

## Usage

```bash
$ saucectl completion [OPTIONS]
```

## Options

### <span className="cli">bash</span>

<div className="cli-desc">

#### Linux

```
saucectl completion bash > /etc/bash_completion.d/saucectl
```

#### macOS

```
saucectl completion bash > /usr/local/etc/bash_completion.d/saucectl
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
saucectl completion zsh > "${fpath[1]}/_saucectl"
```

3. Start a new shell to apply this setup.

</div>

### <span className="cli">fish</span>

<div className="cli-desc">

```
saucectl completion fish | source
```

To load completions for each session, execute once:

```
saucectl completion fish > ~/.config/fish/completions/saucectl.fish
```

</div>

### <span className="cli">Powershell</span>

<div className="cli-desc">

```
saucectl completion powershell | Out-String | Invoke-Expression
```

To load completions for every new session, run the following and then source this file from your Powershell profile:

```
saucectl completion powershell > saucectl.ps1
```

</div>
