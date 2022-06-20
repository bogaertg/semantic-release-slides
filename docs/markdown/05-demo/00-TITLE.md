<!-- .slide: class="transition bg-pink" -->
# Demo

##==##
# To go further
## CI/CD

* Gitlab CI, CircleCI, ...

```bash
semantic-release || npm run release
```

* Github Actions

```yaml
- name: Semantic Release
  uses: cycjimmy/semantic-release-action@v3.0.0
  with:
    semantic_version: 19.0.2
    extra_plugins: |
      @semantic-release/exec@6.0.3
    branches: |    
      [
        'main', 
      ]
    working_directory: '.'
  env:
    GH_TOKEN: ...
```

or 

```yaml
- uses: rlespinasse/release-that@v1
```

##==##
# To go further
## Tools

* Automate your release
  * commitlint
    * Lint your commits
  * commitizen
    * CLI to easily generate commit messages
  * 👉 [other tools](https://www.conventionalcommits.org/en/about/#tooling-for-conventional-commits)

* Keep your library up to date
  * Dependabot
  * Renovate
