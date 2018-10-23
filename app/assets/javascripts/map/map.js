const shapeMap = () => {
  const fieldRootNode = document.getElementsByClassName("fields")[0];
  const fieldNodes = fieldRootNode.childNodes;
  const mapComponents = Array.from(fieldNodes).filter(el => el.nodeName != '#text');

  const fieldsCount = 19;
  for (let i=0; i<fieldsCount; i++) {
    const field = mapComponents[3*i];
    const background = mapComponents[3*i + 1];
    const caption = mapComponents[3*i + 2];

    const dims = dimsForField[i];
    field.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);

    const backgroundDims = dimsForBackground[i];
    background.setAttribute("style", `position: absolute; left: ${backgroundDims[0]}px; top: ${backgroundDims[1]}px;`);
    caption.setAttribute("style", `position: absolute; left: ${backgroundDims[0]}px; top: ${backgroundDims[1]}px;`);
  }
};
