# Graph Visualizer and Articulation Points Finder

<img width="949" alt="image" src="https://github.com/MoncefME/graph-articulation-points-viz/assets/77624873/bc7eb67c-0f2b-409c-9e3a-cc4da0f1d99b">


This project aims to create a graph visualizer using [p5js.org](http://p5js.org) and to find the articulation points (also known as cut vertices) in an undirected graph. Articulation points are the vertices in a graph whose removal increases the number of connected components in the graph. They play a crucial role in the study of graph theory and network analysis.

# Resources

I used these ressources to learn about articulation points, and try to implement them :

- [ GFG Article 📑 ](https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/)
- [ Youtube Video 🎥 ](https://www.youtube.com/watch?v=64KK9K4RpKE)
- [ Youtube Live 📺 ](https://www.youtube.com/watch?v=iYJqgMKYsdI)

for the implementation I was inspired by :

- [grafolio by Issam Djida 🫡](https://grapholio.djidax.com/)
- [This amazing website 🥶](https://giggiox.github.io/graphTheory-Visualizer/)

I'm using `JavaScript` which is not the best option when it comes to error handling and type sentetive compared to `Typescript`, I challenge you to try use `Typescript`

<img width="30" alt="image" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.jpg" style="margin-right: 10px;">

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

<img width="954" alt="image" src="https://github.com/MoncefME/graph-articulation-points-viz/assets/77624873/6ff95ace-46b3-4d8b-a10f-fdf47756a449">


## TODOs:

- [x] Fix the UI ( needs more enhancement) 
- [ ] Turn into TS for max type safety and error handling
- [ ] add other features if possible like moving around the canvas when draging , zoom with mouse , setting to change the radius and colors
- [ ] add the modal for the info , I want to make a small explication about how the articulation points are being calculated , and link to usefull ressouces like the ones mentionned before 
