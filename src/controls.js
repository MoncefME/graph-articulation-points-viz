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

function addVertices() {
  mode = "V";
  graph.selectedVertices = [];
  for (const vertex of graph.vertices) {
    vertex.setSelected(false);
    vertex.setIsAP(false);
  }
  backgroundColor = color(245, 245, 220);
}

function addEdges() {
  mode = "E";
  backgroundColor = color(173, 216, 230);
}

function findArticulationPoints() {
  getArticulationPoints(graph);
}

function deleteVertex() {
  mode = "D";
  backgroundColor = color(255, 120, 120);
}
