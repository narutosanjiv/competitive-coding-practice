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

let inOrderTraversal = function(node, arr){
    if(node == null)
        return
    inOrderTraversal(node.left, arr)
    arr.push(node.val)
    inOrderTraversal(node.right, arr)
}
var isValidBST = function(root) {
    let arr = []
    
    inOrderTraversal(root, arr)
    let n = arr.length
    for(let i=0;i< n - 1;i++){
        if(arr[i] >= arr[i + 1])
            return false
    }
    
    return true
};