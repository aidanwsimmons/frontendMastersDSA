function mergeSort(arr) {
    //
    if(arr.length === 1){
        //base case: return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) //middle item of array rounded down
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return mergeSort(
        mergeSort(left),
        mergeSort(right)
    )
} 


function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while(indexLeft < left.length && indexRigth < right.length) {
        if(left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}