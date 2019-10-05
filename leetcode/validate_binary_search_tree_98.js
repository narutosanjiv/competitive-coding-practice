/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var rightTreeTraversal = function(node, value){
    
    if(node == null)
        return true
    if(node.val <= value)
        return false
    
    return(rightTreeTraversal(node.left, value) && rightTreeTraversal(node.right, value))
    
}

var leftTreeTraversal = function(node, value){
    if(node == null)
        return true
    if(node.val >= value)
        return false
    return(leftTreeTraversal(node.left, value) && leftTreeTraversal(node.right, value))
    
}
var isValidBST = function(root) {
    if(root == null)
        return true
    return(leftTreeTraversal(root.left, root.val) &&                     rightTreeTraversal(root.right, root.val) &&
    isValidBST(root.left) && isValidBST(root.right))
};