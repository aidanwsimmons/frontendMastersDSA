//Task 1: Write a function, times10, that takes an argument, n, and multiplies n times 10

const times10 = (n) => n*10

//Task 2: Use an object to cache the results of your times10 function.
let cache = {}

const memoTimes10 = (n) => {
 if(n in cache){
    return cache[n]
 } 
 else {
    let result = times10(n)
    cache[n] = result
    return result
 }
}