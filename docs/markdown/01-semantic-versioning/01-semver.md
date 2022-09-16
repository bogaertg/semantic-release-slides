<!-- .slide: -->
# [Semantic Versioning](https://semver.org) 

> **MAJOR.MINOR.PATCH**

<br/>

- Examples:
  - 1.0.0, 1.0.6, 1.2.5
  - 2.1.0, 2.4.8
  - 3.9.1

Notes: @antoine
* Juste une norme / Pour uniformiser les versions
* Donnez du sens à vos versions



##==## 
<!-- .slide: -->

# MAJOR.MINOR.PATCH
  
<br/><br/>

- 1.0.**1** ~> 1.0.**2** => 🏖️ you **can** read release notes
- 1.**1**.0 ~> 1.**2**.0 => 👀 you **should** read release notes
- **1**.0.0 ~> **2**.0.0 => ⚠️ you **must** read release notes
<!-- .element: class="list-fragment" -->

Notes: @antoine
* Si une nouvelle version ne contient que de fixes
* on va incrémenter la version PATCH 
* ça signifie que vous pouvez mettre à jour votre version sans risque, c'est même conseillé
* Et il est conseillé de lire la release note
* Si une nouvelle version ne contient des nouvelles fonctionnalités ou des fixes
* on va incrémenter la version MINOR
* Vous devez mettre à jour votre version en toute sécurité, vous devez même le faire si vous voulez profiter des nouvelles fonctionnalités
* Et il est conseillé de lire la release note
* Si une nouvelle version contient au moins un breaking change
* on va incrémenter la version MAJOR
* Dans ce cas, vous devez lire la release notes avant de passer sur cette nouvelle version

Transition: Cette norme contient quelques règles

##==##
<!-- .slide: -->
# Some rules

<br/><br/>

- The contents of a version **MUST NOT** be modified.
- Any modifications **MUST BE** released as a new version.
- A pre-release version may be denoted by appending a hyphen ( `1.0.0-alpha < 1.0.0` )
<!-- .element: class="list-fragment" -->

Notes: @antoine
* La 1ère règle du semantic versioning est que vous ne devez pas modifier le contenu d'une version releasé
* (main levé) Qui a déjà force push un tag pour rajouter une toute petite modification et s'est pris les pieds dans le tapis ?
* Ensuite toutes modifications doivent être publiées sous une nouvelle version.
* Et enfin, vous pouvez ajouter un suffixe `-alpha`, `-rc` pour indiquer que vous publiez une pré-release.

Transition: @gaetan Et maintenant on va voir l'autre pendant de notre présentation, et voir conventional commits
