/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0;

  const DFS = (node = root, depth = max) => {
    if (node === null || node === undefined) {
      max = Math.max(max, depth);
      return;
    }
    // get the hight of the tree with the number of nodes
    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  };

  DFS(root, 0);
  return max;
};

// recursive approach depth first search
var maxDepth = function(root) {
  // You are starting with a default depth of 0
  let max = 0;

  // Since we are looking for the depth we'll be using a depth first search
  // The initial values are set to the root and the max fot simplicity
  const DFS = (node = root, depth = max) => {
    // Condition to check if the node doesn't have children
    if (node === null) {
      // set max to the maximum value of either max or depth
      max = Math.max(max, depth);
      return;
    }
    // Check each left and right. The next recursive call will check to see if it is null
    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  };
  // Call the Depth First Search
  DFS();
  return max;
};
/**
// iterative approach depth first search
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // get the hight of the tree with the number of nodes
  let currentNode = root;
  let list = [];
  let queue = [];
  let depth = 1;
  let maxDepth = 1;
  if (!currentNode) {
    return 0;
  }
  queue.push({ value: currentNode, depth: 1 });
  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value.val);
    if (currentNode.value.left) {
      queue.push({
        value: currentNode.value.left,
        depth: currentNode.depth + 1
      });
      maxDepth = Math.max(maxDepth, currentNode.depth + 1);
    }
    if (currentNode.value.right) {
      queue.push({
        value: currentNode.value.right,
        depth: currentNode.depth + 1
      });
      maxDepth = Math.max(maxDepth, currentNode.depth + 1);
    }
  }

  return maxDepth;
};

// another recursive solution
var maxDepth = function(root) {
  if (!root) return 0;
  var lval = maxDepth(root.left) + 1;
  var rval = maxDepth(root.right) + 1;
  return lval > rval ? lval : rval;
};
// to get number of balanced binary tree levels : console.log(return Math.floor(Math.log(root) / Math.log(2)) + 1;);
