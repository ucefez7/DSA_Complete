class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
}
let graph=new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")