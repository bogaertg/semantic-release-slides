
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
- 17.1k ⭐️ 
- Used by 69.3k
- Contributors 200
- 2014
- v20.0.2
<!-- .element: class="list-fragment" -->

Notes: @antoine
* Projet opensource hébergé sur Github
* écrit en javascript
* 17.1k ⭐️ sur Github
* Utilisé par 69.3k projets
* 200 contributeurs
* Créé en 2014
* La dernière version est la 20.0.2

* Transition: Alors... comment ça marche ?
  
##==##

# Get last tag

<!-- .slide: class="with-code"-->

<br/>

```text
Found git tag 1.2.0 associated with version 1.2.0 on branch master
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

```text [1|3-6|7]
 Found 2 commits since last release
 Start step "analyzeCommits" of plugin "@semantic-release/commit-analyzer"
 Analyzing commit: feat: send an email to the customer when a product is shipped
 The release type for the commit is minor
 Analyzing commit: fix: allow provided config object to extend other configs
 The release type for the commit is patch
 Analysis of 2 commits complete: minor release
```
<!-- .element: class="big-code" -->

Notes: @Antoine
* analyse commit va analyser les commits avec conventional-changelog (par défaut angular)
* trouver 2 commits depuis le dernier tag
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
* donc on a la version précédente (1.2.0)
* on a le type de release (minor)
* et on va calculer la prochaine version (1.3.0)

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
* et une release avec la release note github ou gitlab

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

Transition : @gaetan

##==##
# Disclaimer

<p style="color:green;font-weight:bold">👍 Semantic release use conventional commit</p>
<p style="color:red;font-weight:bold">👎 It doesn't enforce conventional commit</p>

Notes: @Antoine
