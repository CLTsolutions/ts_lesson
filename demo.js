// Basic class
class Animal {
  // Class properties
  // Constructor Fn
  constructor(name, legs) {
    this.name = name
    this.legs = legs
  }
  // Methods
  // can't use fat arrow or lose 'this' keyword
  speak() {
    console.log(this.name)
  }
}

// Class Inheritance
class Tiger extends Animal {
  #password = 42
  constructor(name, legs, isDanger) {
    super(name, legs)
    this.isDanger = isDanger
  }

  // getters
  get password() {
    return this.#password
  }
  set password(n) {
    if (typeof n === 'number') this.#password = n
  }
}

let tiger = new Tiger('bengal', 4, true)
console.log(tiger)
tiger.password = 'Hello'
console.log(tiger.password)

// Create an instance of a class
// new is how you generate instances
// - new addresses instance
// new animal calls constructor
// - name and legs are then called and assigned to instance
// constructors are boxes holding data
let dog = new Animal('lab', 4)
let cat = new Animal('ragdoll', 4)
cat.legs
cat.name
cat.speak()

console.log(dog, cat)
console.log(dog.name, cat.legs)
console.log(dog.name, cat.name)

let numbers = [1, 2, 3]
class Template {
  constructor(n) {
    this.value = n
  }
}

let tNumbers = numbers.map(n => new Template(n))
console.log(tNumbers)
