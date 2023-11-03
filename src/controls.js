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
  //backgroundColor = color(245, 245, 220);
}

function addEdges() {
  let hintText = select("#hint");
  hintText.html("Select Two Vertices to add an Edge");
  document.body.style.cursor = "copy";
  mode = "E";
  resetSelection();
  // backgroundColor = color(173, 216, 230);
}

function deleteVertex() {
  let hintText = select("#hint");
  hintText.html("Click on a Vertex to delete it");
  document.body.style.cursor = "no-drop";
  mode = "D";
  resetSelection();
  // backgroundColor = color(254, 194, 197);
}

function findArticulationPoints() {
  let hintText = select("#hint");
  hintText.html("The articulation points are show in White");
  document.body.style.cursor = "pointer";
  getArticulationPoints(graph);
  //backgroundColor = color(179, 230, 202);
}

function isInsideCanvas(x, y, canvas) {
  if (x >= 0 && x <= canvas.width && y >= 75 && y <= canvas.height - 75)
    return true;
  else return false;
}
