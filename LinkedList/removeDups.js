class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// We want to check every node in the linked list.
// if the node's value is in our set, we want to...
// update the previous node's next value to be equal to the deleted nodes value.
// That will remove the duplicate node. Then, we want to update our current node to the the next node in our linked list.

// variables we will need
// currNode -> this.val at the beginning
// previous node -> null at the beginning (since currNode is the head of our linkedList)
// nextNode -> this.next at the beginning (Potentially unnecessary)
// all we want to do is return this (the node);

// [1, 2, 4, 3, 2, 3] -> [1, 2, 4, 3]

// updated linkedList

// [1, 2, 4, 3]
// next -> null

// currNode -> 3
// previousNode -> 3 -> 3 (next=3)
// unique Nodes -> [1, 2, 4, 3]

function removeDups(node) {
  // set currNode
  let currNode = node;
  let previousNode = null;
  // define our set
  const uniqueNodes = new Set();
  // while currNode is not equal to null
  while (currNode !== null) {
    // check the currNode -> is it in our set?
    if (uniqueNodes.has(currNode.val)) {
      // this means that it is in the set
      // if it is in the set, we want to update the previous node's next to be equal to the currNodes next
      previousNode.next = currNode.next;
      // update currNode to the next node
      currNode = currNode.next;
    } else {
      // it is not in our unique vals
      // add the value to the set
      uniqueNodes.add(currNode.val);
      // update previous node to currNode
      previousNode = currNode;
      currNode = currNode.next;
    }
  }
  return node;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(2);
let node4 = new Node(3);
let node5 = new Node(2);
let node6 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

// console.log(node1, "NODE 1");

console.log(removeDups(node1));

// Since we're going to be working with just a simple node class, we know that we will need to start with the head node (call this function on our head node)

// This means our parameters will be the head node.

// Write code to remove duplicates from an unsorted linked list.

// If we want to remove duplicates, we will need to store the values of each node. In order to store these values in a way that lets us check for duplicates, we can use
// a Set.
