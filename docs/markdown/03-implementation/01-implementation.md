<!-- .slide: -->
# Implementation
## Installation

* Installation

```
npm install --save-dev semantic-release
```

⚠️ Don't forget to install semantic-release plugins

##==##
# Implementation
## Configuration

* .releaserc file, written in YAML or JSON, with optional extensions: .yaml/.yml/.json/.js

```json
{
  "branches": ["+([0-9])?(.{+([0-9]),x}).x", "master", "next", "next-major", {"name": "beta", "prerelease": true}, {"name": "alpha", "prerelease": true}],
  "tagFormat": "v${version}",
  "dryRun": false,
  "ci": true,
  "plugins": [
    [ "@semantic-release/commit-analyzer", 
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github"]
  ]
}
```

##==##
# Plugins
## Lifecycle

Plugins will run in series, in the order defined, for each step if they implement it.

Steps : 
* Verify conditions
* Analyze commits
* Verify release
* Generate notes
* Prepare
* Publish
* AddChannel
* Success
* Notify

##==##
# Plugins
## List

* @semantic-release/commit-analyzer // analyse commit
* @semantic-release/release-notes-generator //
* @semantic-release/npm
* @semantic-release/github
* @semantic-release/gitlab
* @semantic-release/git
* @semantic-release/changelog
* @semantic-release/exec
... and counting

https://semantic-release.gitbook.io/semantic-release/extending/plugins-list#community-plugins
