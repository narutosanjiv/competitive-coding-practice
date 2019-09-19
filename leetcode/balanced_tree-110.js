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

function findDepth(node){
  
    if(node == null){
        return 0
    }
   let lfSize = findDepth(node.left)
   if(lfSize == -1 )
       return -1
   let rSize = findDepth(node.right)

   if(lfSize == -1 || rSize == -1){
       return -1
   }
   
   if(Math.abs(rSize - lfSize) > 1){
       return -1
   }
   return 1 + Math.max(lfSize, rSize)
}

var isBalanced = function(root) {
    if(root == null)
        return true
    let diff = findDepth(root)
    if(diff == -1){
        return false
    }
    return true
};
