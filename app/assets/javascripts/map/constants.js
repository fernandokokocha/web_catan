const hexSize = {
  x: 155,
  y: 135,
};

const margin = {
  x: 20,
  y: 20
};

const dimsForFieldBackground = [
  [margin.x + (hexSize.x * 3 / 4) * 2, margin.y + (hexSize.y * 4 / 2)],

  [margin.x + (hexSize.x * 3 / 4) * 2, margin.y + (hexSize.y)],
  [margin.x + (hexSize.x * 3 / 4) * 3, margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 3 / 4) * 3, margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 3 / 4) * 2, margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 3 / 2)],

  [margin.x + (hexSize.x * 3 / 4) * 2, margin.y + 0],
  [margin.x + (hexSize.x * 3 / 4) * 3, margin.y + (hexSize.y / 2)],
  [margin.x + (hexSize.x * 3 / 4) * 4, margin.y + (hexSize.y)],
  [margin.x + (hexSize.x * 3 / 4) * 4, margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 3 / 4) * 4, margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 3 / 4) * 3, margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 3 / 4) * 2, margin.y + (hexSize.y * 8 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x, margin.y + (hexSize.y * 6 / 2)],
  [margin.x, margin.y + (hexSize.y * 4 / 2)],
  [margin.x, margin.y + (hexSize.y)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y / 2)]
]

const fieldWidthPadding = 10;
const fieldHeightPadding = 9;
const dimsForField = [];
dimsForFieldBackground.forEach((dims) => dimsForField.push([dims[0] + fieldWidthPadding, dims[1] + fieldHeightPadding]));

const dimsForPlace = [
  [margin.x + (hexSize.x * 7 / 4), margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 9 / 4), margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 10 / 4), margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 9 / 4), margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 7 / 4), margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 6 / 4), margin.y + (hexSize.y * 5 / 2)],

  [margin.x + (hexSize.x * 7 / 4), margin.y + (hexSize.y * 2 / 2)],
  [margin.x + (hexSize.x * 9 / 4), margin.y + (hexSize.y * 2 / 2)],
  [margin.x + (hexSize.x * 10 / 4), margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 12 / 4), margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 13 / 4), margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 12 / 4), margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 13 / 4), margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 12 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 10 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 9 / 4), margin.y + (hexSize.y * 8 / 2)],
  [margin.x + (hexSize.x * 7 / 4), margin.y + (hexSize.y * 8 / 2)],

  [margin.x + (hexSize.x * 6 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 4 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 4 / 4), margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 4 / 4), margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 6 / 4), margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 7 / 4), margin.y + (hexSize.y * 0 / 2)],
  [margin.x + (hexSize.x * 9 / 4), margin.y + (hexSize.y * 0 / 2)],
  [margin.x + (hexSize.x * 10 / 4), margin.y + (hexSize.y * 1 / 2)],
  [margin.x + (hexSize.x * 12 / 4), margin.y + (hexSize.y * 1 / 2)],
  [margin.x + (hexSize.x * 13 / 4), margin.y + (hexSize.y * 2 / 2)],
  [margin.x + (hexSize.x * 15 / 4), margin.y + (hexSize.y * 2 / 2)],
  [margin.x + (hexSize.x * 16 / 4), margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 15 / 4), margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 16 / 4), margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 15 / 4), margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 16 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 15 / 4), margin.y + (hexSize.y * 8 / 2)],
  [margin.x + (hexSize.x * 13 / 4), margin.y + (hexSize.y * 8 / 2)],
  [margin.x + (hexSize.x * 12 / 4), margin.y + (hexSize.y * 9 / 2)],
  [margin.x + (hexSize.x * 10 / 4), margin.y + (hexSize.y * 9 / 2)],
  [margin.x + (hexSize.x * 9 / 4), margin.y + (hexSize.y * 10 / 2)],
  [margin.x + (hexSize.x * 7 / 4), margin.y + (hexSize.y * 10 / 2)],
  [margin.x + (hexSize.x * 6 / 4), margin.y + (hexSize.y * 9 / 2)],
  [margin.x + (hexSize.x * 4 / 4), margin.y + (hexSize.y * 9 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 8 / 2)],
  [margin.x + (hexSize.x * 1 / 4), margin.y + (hexSize.y * 8 / 2)],
  [margin.x + (hexSize.x * 0 / 4), margin.y + (hexSize.y * 7 / 2)],
  [margin.x + (hexSize.x * 1 / 4), margin.y + (hexSize.y * 6 / 2)],
  [margin.x + (hexSize.x * 0 / 4), margin.y + (hexSize.y * 5 / 2)],
  [margin.x + (hexSize.x * 1 / 4), margin.y + (hexSize.y * 4 / 2)],
  [margin.x + (hexSize.x * 0 / 4), margin.y + (hexSize.y * 3 / 2)],
  [margin.x + (hexSize.x * 1 / 4), margin.y + (hexSize.y * 2 / 2)],
  [margin.x + (hexSize.x * 3 / 4), margin.y + (hexSize.y * 2 / 2)],
  [margin.x + (hexSize.x * 4 / 4), margin.y + (hexSize.y * 1 / 2)],
  [margin.x + (hexSize.x * 6 / 4), margin.y + (hexSize.y * 1 / 2)],
];
