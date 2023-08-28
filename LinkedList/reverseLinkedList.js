/**
 * Definition for singly-linked list.
  
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// First loop
// future = 2, previous = 1, current = 2
// Second loops

let head = [1, 2, 3, 4, 5];

var reverseList = function (head) {
  // We need a previous and a current value
  let previous = null;
  let current = head;

  while (current !== null) {
    // set future node equal to the next node
    let future = current.next;
    // update our current.next to previous node
    current.next = previous;
    // update previous to our current
    previous = current;
    // update our current to our future value
    current = future;
  }
  return;
};
