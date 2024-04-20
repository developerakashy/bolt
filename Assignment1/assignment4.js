// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {}

function isEmpty(schedule){
    if(Object.keys(schedule).length > 0)
        return false
    return true
}

console.log(isEmpty(schedule))

schedule["key"] = "value"

console.log(isEmpty(schedule))