// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md',
          '00-school/speaker-ameausone.md',
          '00-school/speaker-gbogaert.md'
         ];
}

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
