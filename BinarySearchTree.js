class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.noOfNode = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  loopkup(value) {
    if (this.root === null) {
      return false;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value === currentNode.value) return true;

        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            return false;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            return false;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //REMOVE
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(170);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.loopkup(170));

//      9
//   4      20
// 1   6  15  170

//recursion
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
