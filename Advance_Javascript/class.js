class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }

    sayMyName(){
        return this.fname + ' ' + this.lname
    }
}


const person1 = new Person("Akash", "Yadav")
console.log(person1.sayMyName())

class SuperHero extends Person{
    constructor(fname, lname){
        super(fname, lname)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log("Fighting Crime")
    }
}


const batman = new SuperHero("Kevin", "Devin")
console.log(batman.sayMyName())
batman.fightCrime()