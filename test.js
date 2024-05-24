globalThis.firstName = "Akash"

// console.log(globalThis.firstName)

// function say(){
//     console.log(globalThis)
// }

const person = {
    firstName:"Akash",
    lastName: "Yadav",
    occupation: {
        industry: "semiconductor",
        registration: 2024,
        sayRegistrationYear : function (){
            console.log(this)
        },
        sayIndustryName: () => {  //arrow function scope is always global
            console.log(this)
        }
    }
}

person.occupation.sayRegistrationYear()
person.occupation.sayIndustryName()
