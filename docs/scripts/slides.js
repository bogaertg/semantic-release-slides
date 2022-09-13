// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md',
          '00-school/01-speaker-ameausoone.md',
          '00-school/01-speaker-gbogaert.md',
          //'00-school/02-TOC.md',
          '00-school/03-Intro.md'
         ];
}

function semanticVersioning() {
  return ['01-semantic-versioning/00-TITLE.md',
         '01-semantic-versioning/01-semver.md',
  ];
}

function conventionalCommits() {
  return ['02-conventional-commits/00-TITLE.md',
    '02-conventional-commits/01-conventional-commits.md'
  ];
}

function semanticReleaseConcept() {
  return ['03-semantic-release-concept/00-TITLE.md',
          '03-semantic-release-concept/01-fusion.md'
  ];
}

function semanticReleaseImplementation() {
  return ['04-implementation/00-TITLE.md',
          '04-implementation/01-implementation.md'
  ];
}

function demo () {
  return ['05-demo/00-TITLE.md',
          '05-demo/01-Questions.md'
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...semanticVersioning(),
    ...conventionalCommits(),
    ...semanticReleaseConcept(),//
    ...semanticReleaseImplementation(),//
    ...demo()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
