/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let Alength = A.length;
    let Blength = B.length;
    let swapCount = 0;

    if(Alength != Blength){
        return false;
    }
    if(A == B){
        AcountMap = new Map(); 
        let matching = false;
        for(let i=0;i<Alength;i++){
            if(AcountMap.get(A[i]) == undefined){
                AcountMap.set(A[i], 1);
            }else{
                matching = true;
                break
            }

        }
        return matching;
    }
    let Amap = new Map();
    for(let i=0;i<Alength;i++){
        Amap.set(A[i], i);
    }
    Aarr = A.split('');
    for(let i=0;(i<Blength) && swapCount<2;i++){
        if(Aarr[i] != B[i]){
            let validIndex = Amap.get(B[i]);
            if(validIndex != undefined){
                let currentIndex = Amap.get(A[i]);
                let temp = A[i];
                Aarr[i] = Aarr[validIndex];
                Aarr[validIndex] = temp;
                Amap.set(temp, validIndex);
                Amap.set(Aarr[validIndex], i);
            }
            swapCount++;
        }
    }
    if(swapCount < 2){
        return true;
    }else{
        return false;
    }
};
console.log(buddyStrings("aa", "aa"));