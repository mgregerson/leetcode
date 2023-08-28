/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const uniqueNodes = new Set();
  let previous = null;
  let curr = head;

  while (curr !== null) {
    if (uniqueNodes.has(curr.val)) {
      // We can remove it
      previous.next = curr.next;
      curr = curr.next;
    } else {
      uniqueNodes.add(curr.val);
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
