const getContext = () => document.getElementById("map").getContext("2d");

const resizeCanvas = () => {
  document.getElementById("map").style.width = `${canvasSize.x}px`;
  document.getElementById("map").style.height = `${canvasSize.y}px`;
  const ctx = getContext();
  ctx.canvas.width  = canvasSize.x;
  ctx.canvas.height = canvasSize.y;
}

const drawField = (index, resource, number) => {
  const [baseX, baseY] = dimsForField[index - 1];
  const color = colorForResource[resource];
  let textColor = textColorForResource[resource];
  if (number == 6 || number == 8) textColor = dangerColorForResource;
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

  ctx.fillStyle = textColor;

  const fontSize = 40 - 3 * Math.abs(7 - number);
  ctx.font = `${fontSize}px Arial`;
  const text = `${number}`;
  const textWidth = ctx.measureText(text).width;
  const textHeight = ctx.measureText(text).height;

  ctx.fillText(number, baseX + (hexSize.x / 2) - (textWidth / 2), baseY + (hexSize.y / 2) + (fontSize / 2) - 5);
};
