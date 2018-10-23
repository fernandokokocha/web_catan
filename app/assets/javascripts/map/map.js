const shapeFields = () => {
  const fieldRootNode = document.getElementsByClassName("fields")[0];
  const fieldNodes = fieldRootNode.childNodes;
  const fieldComponents = Array.from(fieldNodes).filter(el => el.nodeName != '#text');

  const fieldsCount = 19;
  for (let i=0; i<fieldsCount; i++) {
    const field = fieldComponents[3*i];
    const background = fieldComponents[3*i + 1];
    const caption = fieldComponents[3*i + 2];

    const dims = dimsForField[i];
    field.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);

    const backgroundDims = dimsForBackground[i];
    background.setAttribute("style", `position: absolute; left: ${backgroundDims[0]}px; top: ${backgroundDims[1]}px;`);
    caption.setAttribute("style", `position: absolute; left: ${backgroundDims[0]}px; top: ${backgroundDims[1]}px;`);
  }
};

const shapePlaces = () => {
  const placeRootNode = document.getElementsByClassName("places")[0];
  const placeNodes = placeRootNode.childNodes;
  const placeComponents = Array.from(placeNodes).filter(el => el.nodeName != '#text');

  const placeCount = 54;
  for (let i=0; i<placeCount; i++) {
    const place = placeComponents[2*i];
    const background = placeComponents[2*i + 1];

    const dims = dimsForPlace[i];
    place.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);
    background.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);
  }
};

const shapeMap = () => {
  shapeFields();
  shapePlaces();
};
