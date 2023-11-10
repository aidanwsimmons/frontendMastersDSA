function joinElements(array, joinString) {
    let resultSoFar = ''
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]

        if(index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(inded + 1, resultSoFar + joinString)
        }
    }

    return recurse(0, '')
}
//joinElements(['s', 'cr', 't cod', ' :) :)'], 'e') => 'secret code :) :)'

function joinElementsIterative(arr, str){
    let res = ''
    for(let i=0; i< arr.length; i++){
        res += arr[i]
        if(i< arr.length -1){
            res += str
        }
    }
    return res
}