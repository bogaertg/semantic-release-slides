<!-- .slide: -->

# Semantic Release 

![center](./assets/images/fusion.png)

##==##
# Goal

> 📦🚀 Fully automated version management and package publishing

##==##
# [Semantic Release](https://github.com/semantic-release/semantic-release)

![float-right h-600](./assets/images/bender.png)

- Open source 
- Written in javascript
- 16.3k ⭐️ 
- Used by 62.9k 
- Contributors 187
- 2014 
- v19.0.5
<!-- .element: class="list-fragment" -->

Notes: C'est un projet opensource
C'est écrit en javascript
Il a 16.3k ⭐️ sur Github
Il est utilisé par 62.9k projets
Il a 187 contributeurs
Il a été créé en 2014
La dernière version est la 19.0.5

##==##

# How it works

![float-right h-600](./assets/images/howdoesitwork.png)

##==##

# Get last tag
<!-- .slide: class="with-code"-->

<br/>

```text
Found git tag 1.360.0 associated with version 1.360.0 on branch master
```
<!-- .element: class="big-code" -->

<br/>

- Branch specific
- Search pattern (default vX.Y.Z)
<!-- .element: class="list-fragment" -->

Notes: Get last git tag on selected branch follow the release pattern (default vX.Y.Z)

##==##
<!-- .slide: class="with-code"-->


# [Analyse commit](https://github.com/semantic-release/commit-analyzer)

<br/>

```text
 Found 2 commits since last release
 Start step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
 Analyzing commit: feat(api): send an email to the customer when a product is shipped
 The release type for the commit is minor
 Analyzing commit: fix: allow provided config object to extend other configs
 The release type for the commit is patch
 Analysis of 2 commits complete: minor release
```
<!-- .element: class="big-code" -->

Notes: plugin to analyze commits with conventional-changelog (default `angular`) and determine the next semantic version release type (major, minor or patch)

##==##
<!-- .slide: class="with-code"-->

# Find the next version

<br/>

```text
Found git tag 1.360.0 associated with version 1.360.0 on branch master
[...] Analyse commit stuff ⚙
Analysis of 2 commits complete: minor release
[...]
The next release version is 1.361.0
```
<!-- .element: class="big-code" -->

##==## 
# Work in progress

##==##
# Git Tag

##==##
# Github or Gitlab Release

![center h-800](./assets/images/github_release.png)

##==##

# Changelog

##==##
# Pull request decoration

