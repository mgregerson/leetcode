function getVals(node, result) {
  if (node.next === null) {
    result.push(node.val);
    return result;
  } else {
    result.push(node.val);
    return getVals(node.next, result);
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Nums = getVals(l1, []);
  let l2Nums = getVals(l2, []);

  let l1Val = Number(l1Nums.reverse().join("")); // Convert to BigInt to handle large numbers
  let l2Val = Number(l2Nums.reverse().join(""));

  let sum = (l1Val + l2Val).toString().split("").reverse();
  let reversedSum = Number(sum.join(""));
  let resultList = null;
  let currNode = null;

  for (const digit of reversedSum.toString()) {
    const newNode = new ListNode(Number(digit));
    if (!resultList) {
      resultList = newNode;
      currNode = resultList;
    } else {
      currNode.next = newNode;
      currNode = newNode;
    }
  }
  return resultList;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2));
