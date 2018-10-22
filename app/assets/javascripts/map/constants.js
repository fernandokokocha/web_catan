const hexSize = {
  x: 155,
  y: 135,
};

const margin = {
  x: 5,
  y: 5
};

const dimsForBackground = [
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
dimsForBackground.forEach((dims) => dimsForField.push([dims[0] + fieldWidthPadding, dims[1] + fieldHeightPadding]));
