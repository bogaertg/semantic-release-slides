<!-- .slide: class="with-code"-->

# Implementation

- Install semantic-release
- Install plugins
```yaml
  @semantic-release/commit-analyzer         # Analyze commits
  @semantic-release/release-notes-generator # Generate notes
  @semantic-release/npm                     # Publish packages to NPM
  @semantic-release/github                  # Publish a GitHub release
  @semantic-release/gitlab                  # Publish to GitLab
  @semantic-release/git                     # Commit release assets to repository
  @semantic-release/changelog               # Generate changelog
  @semantic-release/exec                    # Execute custom commands 
```
<!-- .element: class="big-code list-fragment" -->

##==##
<!-- .slide: class="with-code"-->
# Configuration
## Node

- .releaserc

```json [|3|4|5-7|8|9-12|13]
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

```json [|2|4|5-7|8|9|10-13|14]
{
  "tagFormat": "v${version}",
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
