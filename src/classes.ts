// interfaces
// good at defining what things should have (like a recipe)
// can call twice
// - additive

interface Point {
  calc(): number
}

interface Point {
  something(): number
}

// can add to classes with keyword implements
type message = 'success' | 'failure'
interface Send {
  data: string
  send(): message
}

// getMessage challenge
interface getMessage {
  myMessage(): string
}

// could create type 'hidden' data: string |
class Mail implements Send {
  private _password: string | undefined
  constructor(public data: string) {}

  set password(x: string | undefined) {
    this._password = x
  }

  get password(): string | undefined {
    return this._password
  }

  send(): message {
    let returnValue: message = 'success'
    return returnValue
  }
}

// longer way of writing data
class Email implements Send, getMessage {
  data
  constructor(data: string) {
    this.data = data
  }
  send(): message {
    let returnValue: message = 'success'
    return returnValue
  }
  // toString() {
  //   return JSON.stringify(this)
  // }
  myMessage(): string {
    return this.data
  }
}

const messages = [
  new Mail('Hello from snail mail!'),
  new Email('Hello, can you see me in the inbox?'),
]
messages.forEach(m => m.send())
let email = new Email('Hey, there!')
// console.log(email.toString)
