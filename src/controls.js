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
  let hintText = select("#hint");
  hintText.html("Click anywhere  To add a Vertex");
  document.body.style.cursor = "cell";
  mode = "V";
  resetSelection();
}

function addEdges() {
  let hintText = select("#hint");
  hintText.html("Select Two Vertices to add an Edge");
  document.body.style.cursor = "copy";
  mode = "E";
  resetSelection();
}

function deleteVertex() {
  let hintText = select("#hint");
  hintText.html("Click on a Vertex to delete it");
  document.body.style.cursor = "no-drop";
  mode = "D";
  resetSelection();
}

function findArticulationPoints() {
  let hintText = select("#hint");
  hintText.html("The articulation points are shown in White");
  document.body.style.cursor = "pointer";
  mode = "S";
  getArticulationPoints(graph);
}

function isInsideCanvas(x, y, canvas) {
  if (x >= 0 && x <= canvas.width && y >= 75 && y <= canvas.height - 75)
    return true;
  else return false;
}
