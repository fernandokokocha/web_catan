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

const drawField = ([baseX, baseY], color) => {
  const c = document.getElementById("map");
  const ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(baseX + 30, baseY);
  ctx.lineTo(baseX + 80, baseY);
  ctx.lineTo(baseX + 110, baseY + 40);
  ctx.lineTo(baseX + 80, baseY + 80);
  ctx.lineTo(baseX + 30, baseY + 80);
  ctx.lineTo(baseX, baseY + 40);
  ctx.lineTo(baseX + 30, baseY);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
};

const dimsForField = [
  [160, 160],
  [160, 80],
  [240, 120],
  [240, 200],
  [160, 240],
  [80, 200],
  [80, 120],
  [160, 0],
  [240, 40],
  [320, 80],
  [320, 160],
  [320, 240],
  [240, 280],
  [160, 320],
  [80, 280],
  [0, 240],
  [0, 160],
  [0, 80],
  [80, 40]
]

const colorForResource = {
  'desert': 'black',
  'wool': 'lightgreen',
  'brick': 'darkred',
  'lumber': 'green',
  'grain': 'yellow',
  'ore': 'lightgrey',
}
