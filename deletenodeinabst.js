//Objective is to delete a node in a BST

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution where n is the size of the tree
//We find the node we have to delete, and depending on whether it has children,
//we find it's predecessor/successor to replace it's value
let root = tree.root 

if (!root) {
    return null
}

if (root.val > key) {
    root.left = deleteNode(root.left, key)
} else if (root.val < key) {
    root.right = deleteNode(root.right, key)
} else {
    if (!root.left && !root.right) {
        root = null
    } else if (root.right) {
        root.val = successor(root)
        root.right = deleteNode(root.right, root.val)
    } else {
        root.val = predecessor(root)
        root.left = deleteNode(root.left, root.val)
    }
}

//One step right and then go as left as you can
function successor(root) {
    root = root.right 
    while (root.left) {
        root = root.left
    }
    return root.val
}

//One step left and then go as left as you can
function predecessor(root) {
    root = root.left 
    while (root.right) {
        root = root.right
    }
    return root.val
}

return root