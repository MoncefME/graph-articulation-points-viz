class Vertex {
  constructor(x, y, number) {
    this.position = createVector(x, y);
    this.number = number;
    this.isDragging = false;
    this.radius = 30;
    this.selected = false;
    this.isAP = false;
    this.adjacencyList = [];
  }

  display() {
    noStroke();
    if (this.selected) {
      stroke(255, 0, 0);
      strokeWeight(2);
    }
    fill(this.isAP ? 255 : 0);
    ellipse(this.position.x, this.position.y, this.radius);
    noStroke();
    fill(this.isAP ? 0 : 255);
    textAlign(CENTER, CENTER);
    text(this.number, this.position.x, this.position.y);
  }

  contains(x, y) {
    const d = dist(x, y, this.position.x, this.position.y);
    return d < this.radius / 2;
  }

  drag() {
    if (this.isDragging && !this.contains(mouseX, mouseY)) {
      this.position.x = mouseX;
      this.position.y = mouseY;
    }
  }
  startDrag() {
    if (this.contains(mouseX, mouseY)) {
      this.isDragging = true;
    }
  }

  stopDrag() {
    this.isDragging = false;
  }

  setSelected(selected) {
    this.selected = selected;
  }

  setIsAP(isAP) {
    this.isAP = isAP;
  }
}
