<!-- .slide: -->
# Conventional Commits

## A specification for adding human and machine readable meaning to commit messages.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

<br/>

* *fix:* a commit of the type fix patches a bug in your codebase 
* *feat:* a commit of the type feat introduces a new feature to the codebase .
* a commit that has a footer *BREAKING CHANGE:*, or appends a ! after the type/scope, introduces a breaking API change. can be part of commits of any type.
* other types :
  * build:, chore:, ci:, docs:, style:, refactor:, perf:, test:

<br/><br/>

Specification available here : [conventionalcommits.org](https://www.conventionalcommits.org/)

##==##
<!-- .slide: -->`

# Examples

Simple commit message
```
feat: allow provided config object to extend other configs
```

Commit message with scope
```
feat(api): send an email to the customer when a product is shipped
```

Commit message with breaking change 
```
chore: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```
