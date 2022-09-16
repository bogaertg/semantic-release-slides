<!-- .slide: -->

# Semantic Release 

![center](./assets/images/fusion.png)

##==##
<!-- .slide: class="quote-slide" -->

# Goal

<blockquote>
<cite>
  📦🚀 Fully automated version management and package publishing
</cite>
</blockquote>

Notes:@antoine
* Semantic release est un outil qui permet de gérer automatiquement la version de vos packages
* en se basant sur les normes semantic versioning et conventionnal commit

* Transition: en détail...

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
- Targets: npm, maven, terraform, python, ... 
<!-- .element: class="list-fragment" -->

Notes: @antoine
* C'est un projet opensource hébergé sur github
* C'est écrit en javascript
* Il a 16.3k ⭐️ sur Github
* Il est utilisé par 62.9k projets
* Il a 187 contributeurs
* Il a été créé en 2014
* La dernière version est la 19.0.5

* Transition: Alors... comment ça marche ?
  
##==##

# Get last tag

<!-- .slide: class="with-code"-->

<br/>

```text
Found git tag 1.1.2 associated with version 1.1.2 on branch master
```
<!-- .element: class="big-code" -->

<br/>

- Branch specific
- Custom pattern (default vX.Y.Z)
<!-- .element: class="list-fragment" -->

Notes: @Antoine
semantic release va rechercher le dernier tag git sur la branche sélectionnée en suivant le pattern de release (par défaut vX.Y.Z)

##==##
<!-- .slide: class="with-code"-->

# [Analyse commit](https://github.com/semantic-release/commit-analyzer)

<br/>

```text [1|3-4|5-6|7]
 Found 2 commits since last release
 Start step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
 Analyzing commit: feat(api): send an email to the customer when a product is shipped
 The release type for the commit is minor
 Analyzing commit: fix: allow provided config object to extend other configs
 The release type for the commit is patch
 Analysis of 2 commits complete: minor release
```
<!-- .element: class="big-code" -->

Notes: @Antoine
* analyse commit va analyser les commits avec conventional-changelog (par défaut angular) 
* et déterminer le type de release (major, minor ou patch)

##==##
<!-- .slide: class="with-code"-->

# Find the next version

<br/>

```text [1|3|5]
Found git tag 1.2.0 associated with version 1.2.0 on branch master
[...] Analyse commit stuff
Analysis of 2 commits complete: minor release
[...]
The next release version is 1.3.0
```
<!-- .element: class="big-code" -->

Notes: @Antoine
* semantic release va ensuite déterminer la prochaine version en fonction du type de release

##==## 
# Work in progress

![center h-600](./assets/images/work-in-progress.jpeg)

Notes: @Antoine
* semantic release va ensuite produire un changelog et un tag git

##==##
# Git Tag

![center h-600](./assets/images/git_tag.png)


Notes: @Antoine
* donc on retrouve un tag git avec la version

##==##
# Github or Gitlab Release

![center h-600](./assets/images/github_release.png)

Notes: @Antoine
* et une release avec la release note  github ou gitlab

##==##

# Changelog

![center h-600](./assets/images/changelog.png)

Notes: @Antoine
* et un changelog intégré dans la projet

##==##
# Pull request decoration

![center h-600](./assets/images/pull_request_decoration.png)

Notes: @Antoine
* et semantic release va mettre à jour la pull request avec les informations de la release

* Transition @gaetan
