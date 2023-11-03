let graph;
let mode = "V";
let canvas;

function setup() {
  backgroundColor = color(245, 245, 220);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  graph = new Graph();
  setupButtons();
}

function draw() {
  background(color(245, 245, 220));
  graph.display();
}

function mouseClicked() {
  if (isInsideCanvas(mouseX, mouseY, canvas)) {
    const clickedVertex = graph.getClickedVertex();

    if (mode === "E") {
      if (clickedVertex != undefined) {
        if (clickedVertex === graph.selectedVertices[0]) {
          clickedVertex.setSelected(false);
          graph.selectedVertices = [];
        } else if (clickedVertex !== graph.selectedVertices[0]) {
          clickedVertex.setSelected(true);
          graph.selectedVertices.push(clickedVertex);
        }
      }
    }

    if (graph.selectedVertices.length === 2 && mode === "E") {
      graph.addEdge(graph.selectedVertices[0], graph.selectedVertices[1]);
    }

    if (mode === "V") {
      graph.addVertex(mouseX, mouseY);
    }
    if (mode === "D") {
      graph.deleteVertex(clickedVertex);
    }
  }
}

function mousePressed() {
  for (const vertex of graph.vertices) {
    vertex.startDrag();
  }
}

function mouseReleased() {
  for (const vertex of graph.vertices) {
    vertex.stopDrag();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
