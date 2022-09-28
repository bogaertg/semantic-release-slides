<!-- .slide: class="transition bg-pink" -->
# Demo

Notes: @Gaetan
* On va maintenant voir comment ça fonctionne en pratique

##==##
# Demo
## Scenario 1

![float-left h-500](./assets/images/demo_git_tree_1.png)

* 2 commits
  * feat(api): send an email to the customer ...
  * fix: allow provided config object to ...
* let the magic begin! 🪄

Notes: @Gaetan

##==##
# Demo
## Scenario 1

<video style="padding:auto" height="600px" controls src="./assets/videos/demo1.mp4"></video>

##==##
# Demo
## Scenario 2

![float-left h-500](./assets/images/demo_git_tree_2.png)

* 2 actives versions
  * v1.3.0
  * v1.2.0
* 1 "hotfix" commit
  * fix: crash when customer name > 37 chars
* let the magic begin! 🪄

Notes: @Gaetan
* Transition: @antoine

##==##
# Demo
## Scenario 2

<video style="padding:auto" height="600px" controls src="./assets/videos/demo2.mp4"></video>

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
* On peut l'activer sur chaque commit ou en daily/weekly
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

* Compatible with 
  * Dependabot
  * Renovate

Notes: @Antoine
* commitlint =>  vérifier que vos commits respectent le pattern de commit
* commitizen =>  générer vos commits en suivant le pattern de commit
* dependabot =>  MàJ vos dépendances automatiquement
* renovate => mettre à jour vos dépendances automatiquement

