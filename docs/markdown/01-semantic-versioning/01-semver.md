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
* Donnez du sens

##==## 
<!-- .slide: -->

# MAJOR.MINOR.PATCH
  
<br/><br/>

- 1.0.**1** ~> 1.0.**2** => 🏖️ you **can** read release notes
- 1.**1**.0 ~> 1.**2**.0 => 👀 you **should** read release notes
- **1**.0.0 ~> **2**.0.0 => ⚠️ you **must** read release notes
<!-- .element: class="list-fragment" -->

Notes: @antoine
PATCH signifie que vous pouvez mettre à jour votre version sans risque.
MINOR signifie que vous pouvez mettre à jour votre version mais il faut être vigilant.
MAJOR signifie que vous devez mettre à jour votre version et que vous devez lire les notes de release.


##==##
<!-- .slide: -->
# Some rules

<br/><br/>

- The contents of a version **MUST NOT** be modified.
- Any modifications **MUST BE** released as a new version.
- A pre-release version may be denoted by appending a hyphen ( `1.0.0-alpha < 1.0.0` )
<!-- .element: class="list-fragment" -->

Notes:@antoine
