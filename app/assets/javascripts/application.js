// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

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

const resizeCanvas = () => {
  document.getElementById("map").style.width = `${canvasSize.x}px`;
  document.getElementById("map").style.height = `${canvasSize.y}px`;
  const c = document.getElementById("map");
  const ctx = c.getContext("2d");
  ctx.canvas.width  = canvasSize.x;
  ctx.canvas.height = canvasSize.y;
}

const drawField = ([baseX, baseY], color) => {
  const c = document.getElementById("map");
  const ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(baseX + (hexSize.x / 4), baseY);
  ctx.lineTo(baseX + (hexSize.x * 3 / 4), baseY);
  ctx.lineTo(baseX + (hexSize.x), baseY + (hexSize.y / 2));
  ctx.lineTo(baseX + (hexSize.x * 3 / 4), baseY + (hexSize.y));
  ctx.lineTo(baseX + (hexSize.x / 4), baseY + (hexSize.y));
  ctx.lineTo(baseX, baseY + (hexSize.y / 2));
  ctx.lineTo(baseX + (hexSize.x / 4), baseY);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
};

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
