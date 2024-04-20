let schedule = {}

function isEmpty(schedule){
    if(Object.keys(schedule).length > 0)
        return false
    return true
}

console.log(isEmpty(schedule))