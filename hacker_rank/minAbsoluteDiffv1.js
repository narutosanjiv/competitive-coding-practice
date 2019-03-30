function minimumAbsoluteDifference(arr) {
    let arr_len = arr.length
    let min = Infinity
    if(arr_len == 0){
        return 0
    }
    if(arr_len == 1){
        return arr[0]
    }

    for (let i = 0; i < arr_len ; i++){
        for (let j = i + 1; (j < arr_len) && (j != i); j++){
            let abs_val = Math.abs(arr[j] - arr[i])
            if (min > abs_val) {
                min = abs_val
            }
        }
    }
    return min
}