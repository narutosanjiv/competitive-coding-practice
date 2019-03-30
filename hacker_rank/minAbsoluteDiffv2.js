function minimumAbsoluteDifference(arr) {
    let arr_len = arr.length
    let min = Infinity
    if(arr_len == 0){
        return 0
    }
    if(arr_len == 1){
        return arr[0]
    }
    arr.sort()
    for (let i = 0; i < arr_len - 1; i++){
        let abs_val = Math.abs(arr[i+1] - arr[i])    
        if (min > abs_val) {
            min = abs_val
        }
    }
    return min
}