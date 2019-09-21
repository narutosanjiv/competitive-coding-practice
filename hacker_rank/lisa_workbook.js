function findSpecialPb(totalPage, lastPage, problem_in_chapter, max_problem_in_page){
    let total_no = 0
    let startProblem = 1
    while(lastPage <= totalPage){
        let endPbNo = startProblem + max_problem_in_page - 1
        if(lastPage <= problem_in_chapter){
            if(startProblem <= lastPage &&  lastPage <= endPbNo ){
                total_no = total_no + 1
            }
        } else{
            break
        }
        lastPage = lastPage + 1
        startProblem = endPbNo + 1
    }
    return total_no
}

function workbook(n, k, arr) {
    let i= 0
    let lastPage = 0
    let totalPage = 0
    let count_of_special_pb = 0
    while( i < n){
        let problem_in_chapter = arr[i]
        let no_of_page_in_chap = Math.ceil(problem_in_chapter/k)
        totalPage = no_of_page_in_chap +  totalPage
        count_of_special_pb = count_of_special_pb +findSpecialPb(totalPage, lastPage + 1, problem_in_chapter, k)
        
        lastPage = totalPage
        i=i+1
    }
    return count_of_special_pb
}
