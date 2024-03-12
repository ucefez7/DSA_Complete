class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      this.vertices[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    dfs(startVertex) {
      const visited = {};
      this._dfsHelper(startVertex, visited);
    }
  
    _dfsHelper(vertex, visited) {
      if (!visited[vertex]) {
        console.log(vertex);
        visited[vertex] = true;
        for (const neighbor of this.vertices[vertex]) {
          this._dfsHelper(neighbor, visited);
        }
      }
    }
  
    bfs(startVertex) {
      const visited = {};
      const queue = [startVertex];
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        if (!visited[currentVertex]) {
          console.log(currentVertex);
          visited[currentVertex] = true;
          for (const neighbor of this.vertices[currentVertex]) {
            if (!visited[neighbor]) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  
  console.log('DFS:');
  graph.dfs('A');
  
  console.log('\nBFS:');
  graph.bfs('A');
  