function setupButtons() {
  let addVerticesButton = select("#add-vertex-btn");
  let addEdgesButton = select("#add-edge-btn");
  let findArticulationPointsButton = select("#find-ap-btn");
  let deleteVertexButton = select("#delete-vertex-btn");

  addVerticesButton.mousePressed(addVertices);
  addEdgesButton.mousePressed(addEdges);
  findArticulationPointsButton.mousePressed(findArticulationPoints);
  deleteVertexButton.mousePressed(deleteVertex);
}

function resetSelection() {
  graph.selectedVertices = [];
  for (const vertex of graph.vertices) {
    vertex.setSelected(false);
    vertex.setIsAP(false);
  }
}

function addVertices() {
  document.body.style.cursor = "cell";
  mode = "V";
  resetSelection();
  backgroundColor = color(245, 245, 220);
}

function addEdges() {
  document.body.style.cursor = "copy";
  mode = "E";
  resetSelection();
  backgroundColor = color(173, 216, 230);
}

function deleteVertex() {
  document.body.style.cursor = "no-drop";
  mode = "D";
  resetSelection();
  backgroundColor = color(255, 120, 120);
}

function findArticulationPoints() {
  getArticulationPoints(graph);
}

function isInsideCanvas(x, y, canvas) {
  if (x >= 0 && x <= canvas.width && y >= 65 && y <= canvas.height - 65)
    return true;
  else return false;
}
