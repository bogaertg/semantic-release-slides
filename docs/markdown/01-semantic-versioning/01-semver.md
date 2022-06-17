<!-- .slide: -->
# Semantic Versioning 
## @Tom Preston-Werner

<br/>

  **MAJOR.MINOR.PATCH (X.Y.Z orrrr (Breaking.Feature.Fix)**

* MAJOR version when you make incompatible API changes
* MINOR version when you add functionality in a backwards compatible manner
* PATCH version when you make backwards compatible bug fixes

<br/> <br/> <br/><br/><br/>
Specification available on [semver.org](https://semver.org)

##==##
<!-- .slide: -->`
# Semantic Versioning

## Usage

  * X.Y.1 ~> X.Y.2 : 
    * 🏖️ you can read release notes
  * X.1.Z ~> X.2.Z : 
    * 👀 you should read release notes
  * 1.Y.Z ~> 2.Y.Z : 
    * ⚠️ you must read release notes

##==##
<!-- .slide: -->
# Semantic Versioning

* Somes rules

  * The contents of a version MUST NOT be modified.
  * Any modifications MUST be released as a new version.
  * A pre-release version MAY be denoted by appending a hyphen ( `1.0.0-alpha < 1.0.0` )

