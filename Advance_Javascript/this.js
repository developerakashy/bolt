// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }

// sayMyName('Akash')


// Implicit way of using this
const person = {
    name:"Akash",
    sayMyName:function(){
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName()



// explicit way to use this
globalThis.name = "Global Akash" //default
function sayMyName(){
    console.log(`My name is ${this.name}`)
}

sayMyName()
sayMyName.call(person)


// using new to use this
function Person(name) {
    this.name = name
}

const p1 = new Person("Akash")
const p2 = new Person("Ayush")

console.log(p1.name, p2.name)

// Precosinding order
// new 
// explicit
// implicit 
// default
