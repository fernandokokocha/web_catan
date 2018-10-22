const shapeMap = () => {
  const fieldNodes = document.getElementsByClassName("map-board")[0].childNodes;
  const fields = Array.from(fieldNodes).filter(el => el.nodeName != '#text');
  for (let i=0; i<19; i++) {
    const field = fields[3*i];
    const background = fields[3*i + 1];
    const caption = fields[3*i + 2];
    const dims = dimsForField[i];
    const backgroundDims = dimsForBackground[i];
    background.setAttribute("style", `position: absolute; top: ${backgroundDims[1]}px; left: ${backgroundDims[0]}px;`);
    field.setAttribute("style", `position: absolute; top: ${dims[1]}px; left: ${dims[0]}px;`);
    caption.setAttribute("style", `position: absolute; top: ${backgroundDims[1]}px; left: ${backgroundDims[0]}px;`);
  }
};
