// intro to what types are about
console.log('Greetings!')

// count is of 'type' number
let count = 5
count = 10
//count = 'Chelsey' // is a string

// const's type is a literal
const fname = 'Chelsey'

// this makes a variable of type any
// let testing;
let testing: number
// not valid as 'Justin' is a string not a num
// testing = 'Justin'
testing = 5

type Student = {
  fname: string
  lname: string
  grade: number
}

let student: Student = {
  fname: 'Any',
  lname: 'Anderson',
  grade: 12,
  //   favColor: 'RED', // not happy
}

let student2: Student = {
  fname: 'Jane',
  lname: 'Adam',
  grade: 12,
}

// annoying build up literal here
// function toString(student: {
//    fname: string
//    lname: string
//    grade: number
// }) {
//    return JSON.stringify(student)
// }

// parameter, type, rtn type
function toString(student: Student): string {
  return JSON.stringify(student)
}

const toStringArrow = (student: Student): string => {
  return JSON.stringify(student)
}

console.log(toString(student))
console.log(add(5, testing))

// showing why type any is bad practice
function add(x: number, y: number): number {
  let result = x + y
  return result
}

console.log(fname)

// Any & Void

// Union
// this or this
type Status = 'success' | 'failure'
type ServerRes = Student | string

// Tuples
//  message: string, status: string
function sendMessage(): [success: Status, response: ServerRes] {
  let tmp = Math.round(Math.random())

  if (tmp) {
    return [
      'success',
      {
        fname: 'Chelsey',
        lname: 'T',
        grade: 12,
      },
    ]
  } else {
    return ['failure', 'Something failed.']
  }
  //   return new Error('this is bad')
}

for (let i = 0; i < 10; i++) {
  let [statusResult, data] = sendMessage()
  if (statusResult === 'success') console.log(data)
}
