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
  mode = "V";
  resetSelection();
  backgroundColor = color(245, 245, 220);
}

function addEdges() {
  mode = "E";
  resetSelection();
  backgroundColor = color(173, 216, 230);
}

function deleteVertex() {
  mode = "D";
  resetSelection();
  backgroundColor = color(255, 120, 120);
}

function findArticulationPoints() {
  getArticulationPoints(graph);
}
