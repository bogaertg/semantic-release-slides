<!-- .slide: -->
# Implementation
## Installation

* Installation

```
npm install --save-dev semantic-release
```

<br/>

⚠️ Don't forget to install semantic-release plugins

```text
@semantic-release/commit-analyzer         
@semantic-release/release-notes-generator 
@semantic-release/github                 
...       
 ```              


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

<br/><br/><br/>

⚠️ No branch main in default configuration


##==##
# Plugins
## Lifecycle

Plugins will run in series, in the order defined, for each step if they implement it.

* Steps :
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
<!-- .slide: class="with-code"-->
# Plugins
## List

👉 [official-plugins](https://semantic-release.gitbook.io/semantic-release/extending/plugins-list#official-plugins)

```yaml
@semantic-release/commit-analyzer         # Analyze commits
@semantic-release/release-notes-generator # Generate notes
@semantic-release/npm                     # Publish packages to NPM
@semantic-release/github                  # Publish a GitHub release ... and comment on released Pull Requests/Issues.
@semantic-release/gitlab                  # Publish to GitLab
@semantic-release/git                     # Commit release assets to the project's git repository.
@semantic-release/changelog               # Generate changelog
@semantic-release/exec                    # Execute custom shell commands (e.g. mvn release:prepare)
...                                       # ...
```
<!-- .element: class="big-code" -->

👉 [community-plugins](https://semantic-release.gitbook.io/semantic-release/extending/plugins-list#community-plugins)
