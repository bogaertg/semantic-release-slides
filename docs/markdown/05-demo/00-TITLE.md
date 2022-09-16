<!-- .slide: class="transition bg-pink" -->
# Demo

Notes: @Gaetan
* On va maintenant voir comment ça fonctionne en pratique

* Transition: @antoine


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

Notes: @Antoine
* Il est fortement recommandé d'intégrer semantic release dans votre CI/CD
* Ici un exemple avec une Github Action
* Vous pouvez aussi utiliser un outil comme release-that qui va gérer la release pour vous sans fichier de configuration.

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

Notes: @Antoine
* commitlint va vous permettre de vérifier que vos commits respectent le pattern de commit
* commitizen va vous permettre de générer vos commits en suivant le pattern de commit
* dependabot va vous permettre de mettre à jour vos dépendances automatiquement
* renovate va vous permettre de mettre à jour vos dépendances automatiquement

