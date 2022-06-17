// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md',
          '00-school/speaker-ameausone.md',
          '00-school/speaker-gbogaert.md'
         ];
}

function introSlides() {
  return ['01-intro/00-TITLE.md',
          '01-intro/01-TOC.md',
          '01-intro/02-Release.md',
  ];
}

function introSemVer() {
  return ['02-semver/00-TITLE.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(),
    ...introSemVer()//
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
