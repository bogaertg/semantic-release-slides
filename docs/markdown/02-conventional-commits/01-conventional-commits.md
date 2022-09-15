<!-- .slide: class="with-code"-->
# [Conventional Commits](https://www.conventionalcommits.org/)

<br/>

```
<type>(optional scope): <description>

[optional body]

[optional footer(s)]
```
<!-- .element: class="big-code" -->

<br/>

Notes: @gaetan
* conventional commits : c'est une spécification pour ajouter du sens aux messages de commit.

* Transition: On va détailler ça

##==##

<!-- .slide: class="with-code"-->
# Types

- fix
```text
fix: add extra header
```
<!-- .element: class="big-code" -->

- feature
```text
feat(api): send an email to the customer when a product is shipped
```
<!-- .element: class="big-code" -->

- breaking change
```text
chore: drop support for Node 6
BREAKING CHANGE: use JavaScript features not available in Node 6.
```
<!-- .element: class="list-fragment big-code" -->

Notes: @gaetan
* un commit de type fix corrige un bug dans votre code
* un commit de type feature ajoute une nouvelle fonctionnalité
* un commit de type breaking change indique que votre code n'est plus compatible avec une version précédente
* un commit de type chore est un commit qui n'entre pas dans les catégories précédentes

* Transition: Il y a également d'autres types de commits

##==##
<!-- .slide: class="with-code"-->
# Other types

- ci
```text
ci: move to github actions
```
<!-- .element: class="big-code" -->

- style
```text
style: use dracula theme
```
<!-- .element: class="big-code" -->

- refactor
```text
refactor: use a better way to do it
```
<!-- .element: class="big-code list-fragment" -->

Notes: @gaetan
* Il y a d'autres types de commit, comme build, chore, ci, docs, style, refactor, perf, test qui n'impacte pas le code.

* Transition: @antoine Et maintenant on va voir comment mixer les 2
