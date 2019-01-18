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
  function mD(node, depth) {
    const LN = mD(root.left, depth + 1);
    const RN = mD(root.right, depth + 1);

    if (node === null || node === undefined) {
      return depth;
    }
  }
  return mD(root, 0);
};
