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
* Si commit contient au moins un fixes, mais pas de breaking change ni de feature
* PATCH ++ (ou fix)
* MàJ version sans risque, c'est même conseillé
* -conseiller- de lire la release note

* Si commit contient au moins une feature, mais pas de breaking change
* MINOR ++ (ou feature)
* Pas obligé de mettre à jour, mais vous pouvez.  
* -conseiller- de lire la release note.

* Si un commit au moins un breaking change
* MAJOR ++ (ou breaking change)
* Dans ce cas, vous -devez- lire la release notes avant de passer sur la nouvelle version

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
* (👋) Qui a déjà releasé une version puis fait un tout petit fix, qui a déjà force push un tag pour rajouter une toute petite modification et s'est pris les pieds dans le tapis ?
* Ensuite toutes modifications doivent être publiées sous une nouvelle version.
* Et enfin, vous pouvez ajouter un suffixe `-alpha`, `-rc` pour indiquer que vous publiez une pré-release.

Transition:  Et maintenant @gaetan va vous montrer l'autre pendant de notre présentation, et voir conventional commits @gaetan
