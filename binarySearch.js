class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  find(val) {
    let found;
    let curr = this.root;

    while (!found) {
      if (curr.val === val) {
        found = curr;
      } else if (curr.left && val < curr.val) {
        curr = curr.left;
      } else if (curr.right && val > curr.val) {
        curr = curr.right;
      } else {
        break;
      }
    }
    return found;
  }
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
