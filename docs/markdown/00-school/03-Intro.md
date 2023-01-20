<!-- .slide -->
# We want to know you 

* Who uses Git (Github, Gitlab, Bitbucket) ?
* Who uses Git tag ?
* Who builds a package and store it in a registry ?
* Who knows and uses semantic-release ?
* Are you satisfied of your release process ?
<!-- .element: class="list-fragment" -->

Notes: 02:00 @Antoine

##==##
<!-- .slide -->
# This is a story of ...

* v3257 -> v3284 
  * No release notes 👎
* No changelog 👎
* Available code  👍
  * "fix up"
  * "new feature"
  * "update core"
* Deep dive in code 🤿
<!-- .element: class="list-fragment" -->


Notes: 02:00 @Gaetan

* Je vais vous raconter l'histoire
* tout le monde concerné (dev, ops, )
  * terraform
  * lib node, plugin maven

Editeur 

##==##

<!-- .slide -->
# Hope

![center h-600](./assets/images/hope.gif)

Notes: @Gaetan

##==##
# Why ?

- Heterogeneous tools
  - version maven plugin
  - npm version | lerna 
  - bumpver 
- Complex organization (mono/multi repo)
- workflow git

<!-- .element: class="list-fragment" -->

Notes: @gaetan

* process long, manual
* Question métaphysique : 
  * quels nom de version
  * mono vs multirepo
  * hotfix

* Contribue a une version dénué de sens => 
* 1er solution convention de nommage

##==##
<!-- .slide: class="transition bg-green" -->

# How to give meaning to our release ?

##==##

# Convention naming

- Ubuntu
  - 21.04, 21.10, 22.04, 22.10, ...
- Unity
  - 2022.1.0, 2022.1.1 , ... , 2022.1.16
- Tex
  - 3.14, 3.141, 3.1415 
  - ... 𝝅
- Windows
<!-- .element: class="list-fragment" -->

Notes: @gaetan
* Il y a toute sortes de conventions de nommage de version.
* Par exemple, basé sur les années, calver
* Ou plus original comme pour Tex, qui utilise la valeur de π.

Transition @antoine
