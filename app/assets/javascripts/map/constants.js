const hexSize = {
  x: 100,
  y: 87,
};

const margin = {
  x: 5,
  y: 5
};

const canvasSize = {
  x: 2*margin.x + 4*hexSize.x,
  y: 2*margin.y + 5*hexSize.y,
}

const dimsForField = [
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

const colorForResource = {
  'desert': 'black',
  'wool': 'lightgreen',
  'brick': 'darkred',
  'lumber': 'green',
  'grain': 'yellow',
  'ore': 'lightgrey',
}

const textColorForResource = {
  'desert': 'white',
  'wool': 'black',
  'brick': 'black',
  'lumber': 'black',
  'grain': 'black',
  'ore': 'black',
}

const dangerColorForResource = 'red';
