class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  class Tree {
    constructor(rootValue) {
      this.root = new TreeNode(rootValue);
    }
  }
  
  
  const tree = new Tree("Root");
  
  const node1 = new TreeNode("Node 1");
  const node2 = new TreeNode("Node 2");
  
  tree.root.addChild(node1);
  tree.root.addChild(node2);
  
  const node3 = new TreeNode("Node 3");
  node1.addChild(node3);
  
  console.log(tree);
  