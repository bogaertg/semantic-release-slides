<!-- .slide: -->
# Implementation

- Install semantic-release
- Install plugins
```yaml
  @semantic-release/commit-analyzer         # Analyze commits
  @semantic-release/release-notes-generator # Generate notes
  @semantic-release/npm                     # Publish packages to NPM
  @semantic-release/github                  # Publish a GitHub release ... and comment on released Pull Requests/Issues.
  @semantic-release/gitlab                  # Publish to GitLab
  @semantic-release/git                     # Commit release assets to the project's git repository.
  @semantic-release/changelog               # Generate changelog
  @semantic-release/exec                    # Execute custom shell commands (e.g. mvn release:prepare)
```
<!-- .element: class="list-fragment" -->

##==##
# Configuration
## Node

- .releaserc

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    "@semantic-release/changelog",
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md","package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]"
    }],
    "@semantic-release/github"
  ]
}
```

##==##
# Configuration
## Maven

- .releaserc

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/exec", {
      "prepareCmd": "./mvnw -q versions:set -DnewVersion=${nextRelease.version}"
    }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/git", {
      "assets": ["**\pom.xml", "CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
    }],
    "@semantic-release/github"
  ]
}
```
