/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let len1 = nums1.length
    let num1_map = {}
    for(let i=0;i < len1;i++){
        num1_map[nums1[i]] = i
    }  
    
    let len2 = nums2.length
    let result = new Set()
    for(let i=0;i<len2;i++){
        if(num1_map[nums2[i]] != undefined){
            result.add(nums2[i])
        }
    }
    return Array.from(result)
};
