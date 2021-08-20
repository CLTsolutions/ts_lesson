// type allows us to add to the type system

// below is a union
type Year = string | number

// enum is a set of values
// can start enums at a different index
// - could start red at different num besides 0
enum Color {
  'Red', // 'Red' = 2
  'Blue',
  'Yellow',
}

console.log(Color.Red)

// type should be capital
// types are uniques unlike interfaces
// usually in a separate file
type Car = {
  year: Year
  color: Color
}

type addInput = number | string
function addTwoThings(x: any, y: any): string | number {
  return x + y
}

let z = addTwoThings('2', '5')
// will be mad because numbers don't support uppercase
// z.toUppercase()
// Guard .. Type Guards
if (typeof z == 'string') {
  z.toUpperCase()
}

// [1, 2, 3, 'Hello'] // Array<number> or number[]
// Array<any>
let myObj: any[] | object
myObj = [1, 2, 3]
myObj = { fName: 'Chelsey' }
// console.log(typeof myObj)
if (myObj instanceof Array) {
  console.log(myObj)
} else {
  let values = Object.values(myObj)
  console.log(values)
}
