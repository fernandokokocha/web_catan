const getContext = () => document.getElementById("map").getContext("2d");

const resizeCanvas = () => {
  document.getElementById("map").style.width = `${canvasSize.x}px`;
  document.getElementById("map").style.height = `${canvasSize.y}px`;
  const ctx = getContext();
  ctx.canvas.width  = canvasSize.x;
  ctx.canvas.height = canvasSize.y;
}

const drawField = ([baseX, baseY], color) => {
  const ctx = getContext();

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
