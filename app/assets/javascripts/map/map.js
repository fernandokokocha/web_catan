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

    const backgroundDims = dimsForFieldBackground[i];
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
    const place = placeComponents[3*i];
    const background = placeComponents[3*i + 1];
    const caption = placeComponents[3*i + 2];

    const dims = dimsForPlace[i];
    place.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);
    background.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);
    caption.setAttribute("style", `position: absolute; left: ${dims[0]}px; top: ${dims[1]}px;`);
  }
};

const shapeRoads = () => {
  const roadRootNode = document.getElementsByClassName("roads")[0];
  const roadNodes = roadRootNode.childNodes;
  const roadComponents = Array.from(roadNodes).filter(el => el.nodeName != '#text');

  roadComponents.forEach((roadComponent) => {
    const from = parseInt(roadComponent.dataset.from);
    const to = parseInt(roadComponent.dataset.to);
    const fromDims = dimsForPlace[from - 1];
    const toDims = dimsForPlace[to - 1];

    roadComponent.setAttribute('style', calcRoadStyles(fromDims[0], fromDims[1], toDims[0], toDims[1]));
  })
}

const calcRoadStyles = (x1, y1, x2, y2) => {
    const a = x1 - x2,
          b = y1 - y2,
          c = Math.sqrt(a * a + b * b);

    const sx = (x1 + x2) / 2,
          sy = (y1 + y2) / 2;

    const x = sx - c / 2,
          y = sy;

    const alpha = Math.PI - Math.atan2(-b, a);

    return getStyles(x, y, c, alpha);
}

const getStyles = (x, y, length, angle) => {
  const borderWidth = 3;
  return `
    border-width: ${borderWidth}px;
    border-style: solid;
    width: ${length}px;
    height: 12px;
    -moz-transform: rotate(${angle}rad);
    -webkit-transform: rotate(${angle}rad);
    -o-transform: rotate(${angle}rad);
    -ms-transform: rotate(${angle}rad);
    position: absolute;
    top: ${y - borderWidth*2}px;
    left: ${x}px;
  `;
}

const shapeMap = () => {
  shapeFields();
  shapePlaces();
  shapeRoads();
};
