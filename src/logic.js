function getArticulationPoints(graph) {
  disc = new Map();
  low = new Map();
  visited = new Map();
  isAP = new Map();
  time = 0;
  par = -1;

  for (const vertex of graph.vertices) {
    const u = vertex.number;
    if (visited.get(u) === undefined) {
      DFS(graph, u, visited, disc, low, time, par, isAP);
    }
  }
  for (const vertex of graph.vertices) {
    if (isAP.get(vertex.number)) {
      vertex.setIsAP(true);
    }
  }
}

function DFS(graph, u, visited, disc, low, time, parent, isAP) {
  childred = 0;
  visited.set(u, true);
  disc.set(u, time);
  low.set(u, time);
  time = time + 1;
  const adjList = graph.vertices.find((vv) => vv.number === u).adjacencyList;
  for (const v of adjList) {
    if (visited.get(v) === undefined) {
      childred++;
      DFS(graph, v, visited, disc, low, time, u, isAP);

      low.set(u, Math.min(low.get(u), low.get(v)));

      if (parent !== -1 && low.get(v) >= disc.get(u)) {
        isAP.set(u, true);
      }
    } else if (v !== parent) {
      low.set(u, min(low.get(u), disc.get(v)));
    }
  }
  if (parent === -1 && childred > 1) {
    isAP.set(u, true);
  }
}
