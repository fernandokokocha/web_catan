const getContext = () => document.getElementById("map").getContext("2d");

const resizeCanvas = () => {
  document.getElementById("map").style.width = `${canvasSize.x}px`;
  document.getElementById("map").style.height = `${canvasSize.y}px`;
  const ctx = getContext();
  ctx.canvas.width  = canvasSize.x;
  ctx.canvas.height = canvasSize.y;
};

const drawHexOutline = (baseX, baseY) => {
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
};

const fillHexOutline = (color) => {
  const ctx = getContext();
  ctx.fillStyle = color;
  ctx.fill();
};

const drawFieldNumber = (baseX, baseY, textColor, number) => {
  const ctx = getContext();

  ctx.fillStyle = textColor;
  const fontSize = 40 - 3 * Math.abs(7 - number);
  ctx.font = `${fontSize}px Arial`;
  const text = `${number}`;
  const textWidth = ctx.measureText(text).width;
  const textHeight = ctx.measureText(text).height;

  const startX = baseX + (hexSize.x / 2) - (textWidth / 2);
  const correction = -5;
  const startY = baseY + (hexSize.y / 2) + (fontSize / 2) + correction;
  ctx.fillText(number, startX, startY);
};

const drawField = (index, resource, number) => {
  const [baseX, baseY] = dimsForField[index - 1];
  const color = colorForResource[resource];
  let textColor = textColorForResource[resource];
  if (number == 6 || number == 8) textColor = dangerColorForResource;

  drawHexOutline(baseX, baseY);
  fillHexOutline(color);
  drawFieldNumber(baseX, baseY, textColor, number)
};

const shapeCSSMap = () => {
  const fieldNodes = document.getElementsByClassName("map-board")[0].childNodes;
  const fields = Array.from(fieldNodes).filter(el => el.nodeName != '#text');
  for (let i=0; i<19; i++) {
    const background = fields[2*i];
    const field = fields[2*i + 1];
    const dims = dimsForField[i];
    const backgroundDims = dimsForBackground[i];
    background.setAttribute("style", `position: absolute; top: ${backgroundDims[1]}px; left: ${backgroundDims[0]}px;`);
    field.setAttribute("style", `position: absolute; top: ${dims[1]}px; left: ${dims[0]}px;`);
  }
};
