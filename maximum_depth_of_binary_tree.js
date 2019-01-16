/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
 this is working with breadth first search only if we want to count the horozontial levels
 */
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // get the hight of the tree with the number of nodes
  let currentNode = root;
  // list of the counted nodes
  let list = [];
  // queue to process nodes 
  let queue = [];
  let depth = 1;
  queue.push(currentNode);
  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    if (currentNode.left || currentNode.right) {
      ++depth;
    }
  }

  return depth;
};

// console.log(return Math.floor(Math.log(root) / Math.log(2)) + 1;);
