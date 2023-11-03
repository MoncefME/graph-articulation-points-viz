# Graph Visualizer and Articulation Points Finder 

<img width="948" alt="image" src="https://github.com/MoncefME/graph-articulation-points-viz/assets/77624873/0befd5d2-a03d-48a9-9699-959efdf225a9">

This project aims to create a graph visualizer using [p5js.org](http://p5js.org) and to find the articulation points (also known as cut vertices) in an undirected graph. Articulation points are the vertices in a graph whose removal increases the number of connected components in the graph. They play a crucial role in the study of graph theory and network analysis.

## Project Structure

The project's folder structure is organized as follows:

- **src**: This folder contains the JavaScript classes and modules for the project.
  - `graph.js`: Defines the `Graph` class to represent the graph structure.
  - `edge.js`: Defines the `Edge` class to represent edges between vertices.
  - `vertex.js`: Defines the `Vertex` class to represent vertices in the graph.
  - `controls.js`: Provides button controls to add vertices, add edges, delete vertices, and find articulation points.
  - `logic.js`: Contains logic for finding articulation points using depth-first search (DFS).

- **root**: This is the main directory where the core logic and sketch are implemented.
  - `sketch.js`: Utilizes p5.js to draw the canvas and handle user events for the graph visualization.
  - Other files may include HTML and CSS if used for rendering the user interface.
    
<div align="center">
  <img width="300" alt="image" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/P5js_Logo.svg">
</div>

## Usage

To use the application, open the `index.html` file or run a local server to visualize and interact with the graph. The application provides controls for adding vertices, adding edges, deleting vertices, and finding articulation points.

Please note that this project is currently a work in progress, and some features may not be fully functional or accurate. Contributions and improvements are welcome.

## Articulation Points
Articulation points, also known as cut vertices, are vertices in an undirected graph whose removal increases the number of connected components in the graph. They have a significant impact on graph connectivity and are essential in various graph-related applications.

<img width="948" alt="image" src="https://github.com/MoncefME/graph-articulation-points-viz/assets/77624873/35af62f5-be02-4060-a29d-31333481c8ab">


