const times10 = (n) => (n * 10)

//Task 4: Make your memo function generic and accept the times10 
// function as a callback rather than defining the n* 10 logic inside 
// the if/else or pulling it in from the global scope.

const memoize = (cb) => {
    let cache = {}
    return (n) => {
        if(n in cache){
            return cache[n]
        }
        else {
            let result = cb(n)
            cache[n] = result
            return result
        }
    }
}



//returned function from memoizeAdd
const memoizedTimes10 = memoize(times10)