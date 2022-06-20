<!-- .slide: -->

# Semantic Release 

![center](./assets/images/fusion.png)

##==##
# Semantic Release

> 📦🚀 Fully automated version management and package publishing

* Open source project [semantic-release/semantic-release](https://github.com/semantic-release/semantic-release) 
* Written in javascript | 15.7k ⭐️ | Used by 58.9k | Contributors 187
* October 2014 | v19.0.3

![float-right](./assets/images/bender.png)
##==##

# Semantic Release
## Get last version

Get last git tag on selected branch follow the release pattern (default vX.Y.Z)

<br/>

```text
[semantic-release] › ℹ  Found git tag 1.360.0 associated with version 1.360.0 on branch master
```


##==##

# Semantic Release
## Commit analyser

plugin to analyze commits with conventional-changelog (default `angular`)

<br/>

```text
[semantic-release] › ℹ  Found 1 commits since last release
[semantic-release] › ℹ  Start step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analyzing commit: feat(api): send an email to the customer when a product is shipped
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  The release type for the commit is minor
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analyzing commit: fix: allow provided config object to extend other configs
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  The release type for the commit is patch
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analysis of 2 commits complete: minor release
```


<br/><br/><br/><br/><br/><br/>

Can use others presets or custom rules (👉 [here](https://github.com/semantic-release/commit-analyzer))

##==##

# Semantic Release
## Find the new version

<br/>

```text
[semantic-release] › ℹ  Found git tag 1.360.0 associated with version 1.360.0 on branch master
[semantic-release] › ℹ  Found 1 commits since last release
[semantic-release] › ℹ  Start step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analyzing commit: feat: avoid sms notification ... (#1393)
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  The release type for the commit is minor
[semantic-release] [@semantic-release/commit-analyzer] › ℹ  Analysis of 1 commits complete: minor release
[semantic-release] › ✔  Completed step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
[semantic-release] › ℹ  Start step "analyzeCommits" of plugin "@semantic-release/exec"
[semantic-release] › ✔  Completed step "analyzeCommits" of plugin "@semantic-release/exec"
[semantic-release] › ℹ  The next release version is 1.361.0
```
<!-- .element: class="big-code" -->


##==##

# Semantic Release
## Enjoy !


![float-right h-800](./assets/images/github_release.png)

* Git tag
* Github / Gitlab Release
* Release notes
* Changelog
* ...

