var validPalindrome = function(s) {
    let mismatch_count = 0;
    let i = 0;
    let j = s.length - 1;
    while((i<j) && mismatch_count < 2) {
        if(s[i] != s[j]){
            mismatch_count++;
           if((s[i + 1] == s[j]) && (s[j-1]  == s[i])){
               let left_size = i + 2;
               let right_size = j - 2;
               if((s[i + 2] == s[j-1])&&(left_size < (j-1))) {
                 i++;
                 continue;
               }else if((s[i+1] == s[j-2])  &&((i+1)<right_size)){
                   j--;
                   continue;
               }

           }
           if(s[i + 1] == s[j]){   
               i++;            
           }   
           else if(s[j-1]  == s[i]){
               j--;
           }
                    
        }else{
            i++;
            j--;
        }
    }
    if(mismatch_count > 1){
        return false
    }
    return true
};
let test_string="aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";
// let test_string="abca";
validPalindrome(test_string)