// 2635 apply transform over each element of array

var map = function(arr, fn) {
    newArray = []

    arr.forEach((element,i) => {
        
        newArray.push(fn(element,i))
    })

    return newArray
};

var alteredArray = map([1,2,3,4,5],function plusI(n, i) { return n + i; }) 

console.log(alteredArray)