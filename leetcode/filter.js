// 2634 filter elements from array

var filter = function(arr, fn) {
    let array = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            array.push(arr[i])
        }
    }

    return array

};

let filterdArray =  filter([-2,-1,0,1,2],function plusOne(n) { return n + 1 })

console.log(filterdArray)