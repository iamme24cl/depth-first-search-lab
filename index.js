// procedure DFS_iterative(G, v) is
//     let S be a stack
//     S.push(v)
//     while S is not empty do
//         v = S.pop()
//         if v is not labeled as discovered then
//             label v as discovered
//             for all edges from v to w in G.adjacentEdges(v) do 
//                 S.push(w)

function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  stack.push(rootNode);
  let visitedNodes = [rootNode];

  while(stack.length !== 0) {
    let vertex = stack.pop();
    if (!vertex.discovered) {
      vertex.discovered = true;
      findAdjacentNodes(vertex.name, vertices, edges).forEach(node => {
        visitedNodes.push(node);
        stack.push(node);
      })
    }
  }
  return visitedNodes;
}

function findAdjacentNodes(nodeName, vertices, edges) {
  return edges.filter(edge => {
    return edge.includes(nodeName);
  }).map(edge => {
    return edge.filter(node => {
      return (node != nodeName);
    })[0]
  }).map(name => {
    return findNode(name, vertices)
  }).filter(node => {
    return !node.discovered;
  })
}

function findNode(nodeName, vertices) {
  return vertices.find(vertex => vertex.name == nodeName);
}