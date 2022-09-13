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

Notes: Une spécification pour ajouter du sens aux messages de commit.

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

Notes: un commit de type fix corrige un bug dans votre code

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

Notes: Il y a d'autres types de commit, comme build, chore, ci, docs, style, refactor, perf, test qui n'impacte pas le code.
