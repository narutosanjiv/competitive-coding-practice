var kSmallestPairs = function(nums1, nums2, k) {
    let smallest_pairs = []
    for(let i=0;i<k;i++){
        for(let j=0;j<k;j++){
            if(smallest_pairs.length == 0){
                smallest_pairs.push([nums1[i], nums2[j])
            } else {
                let l=smallest_pairs.length                    
                let last_pair = smallest_pairs[l - 1]
                let next_num_sum = nums1[i] +nums2[j]
                l = l -1                        
                if((last_pair[0] + last_pair[1]) > next_num_sum) {
                     while(((last_pair[0] + last_pair[1]) > next_num_sum) && l >= 0 ){
                         
                        smallest_pairs[l + 1] =  [last_pair[0], last_pair[1]]
                        l = l - 1
                        if( l > 0){
                          last_pair = smallest_pairs[l]                             
                        } 
                     }
                     smallest_pair[l] = [nums1[i], nums2[j]]
                }    
                
            
          }
        }
    }
};