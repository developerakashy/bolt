function Person(fname, lname){
    this.fname = fname
    this.lname = lname
}

const person1 = new Person("Akash", "Yadav")
const person2 = new Person("Ayush", "Yadav")

Person.prototype.getFullName = function (){
    return this.fname + ' ' + this.lname
}

console.log(person1.getFullName())
console.log(person2.getFullName())


function superHero(fname, lname){
    Person.call(this,fname,lname)
    this.isSuperHero = true
}

superHero.prototype = Object.create(Person.prototype)

const batman = new superHero("Ant","Hyper")

console.log(batman.getFullName())

