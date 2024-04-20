// function add(num1:number, num2:number) {
//   return num1 + num2
// }


// let result = add(5,8)
// console.log(result)


// let values: number[] = [10,20,40]


// Apple, 3, true

// let item: [string, number, boolean] = ['Apple', 3, true]

// item[1].toString()


// enum Role {admin = 1, read = 2, backup = 3}

// const user = {
//   firstName: 'Enzo',
//   age: 20,
//   role: Role.admin
// }

// console.log(user)


// function add(num1: number, num2: number) {
//   return num1 + num2
// }


// function result(price: number) {
//   console.log('The result is ' + price)
// }

// result(add(3,8))


// const user = {
//   firstName: 'Enzo',
//   age: 20,
//   lastName: 'G'
// }

// user.lastName = 'Gois'


// let itemInput: unknown
// let itemName: string

// itemInput = 10
// itemInput = 'Apple'

// if(itemInput === 'string') {
//   itemName = itemInput
// }


// function generateError(message: string, code: number): never {
//   throw {message: message, errorCode: code}
// }

// generateError('The application crashed',500)


// type Users  = {
//   firstName: string,
//   age: number
// }

// const user: Users = {
//   firstName: 'Enzo',
//   age: 20,
// }


// function userInput(input1: number | string, input2: number | string) {
//   let result
//   if(typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2
//   } else {
//     result = input1.toString() + input2.toString()
//   }
//   return result
// }

// const combinePrices = userInput(10,20)
// console.log(combinePrices)
// const combineName = userInput('Apple', 'Avocado')
// console.log(combineName)


// let productPrice: 10  | 20 | 30
// let productSize: 'S' | 'M' | 'L'

// productPrice = 20
// productSize = 'M'


// type User = {
//   firstName: string,
//   age: number
// }


// type JobRole = {
//   id: number,
//   role: string
// }


// type employee = User & JobRole

// const e1: employee = {
//   firstName: 'Enzo',
//   age: 20,
//   id: 11,
//   role: 'Dev'
// }

// console.log(e1)


// Day 3 - Exercise 1
// let pi = 3.14159;
// let tau = pi * 2;
// console.log(`${tau} is ${pi} times two.`);


// Day 3 - Exercise 2
// let pie: string
// pie = 'blueberry'
// console.log(`I like to eat ${pie}-flavored pie.`)


// Day 3 - Exercise 3
// let isDouglas: boolean = false
// console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)


// Day 3 - Exercise 4
// const integer: number = 6;
// const float: number = 6.66;
// const hex: number = 0xf00d;
// const binary: number = 0b1010011010;
// const octal: number = 0o744;
// const negZero: number = -0;
// const actuallyNumber: number = NaN;
// const largestNumber: number = Number.MAX_VALUE;
// const mostBiglyNumber: number = Infinity;

// const members: number[] = [
//   integer,
//   float,
//   hex,
//   binary,
//   octal,
//   negZero,
//   actuallyNumber,
//   largestNumber,
//   mostBiglyNumber
// ];

// members[0] = 12345;

// console.log(members);


// Day 3 - Exercise 5
// const sequence: number[] = Array.from(Array(10).keys());
// const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

// console.log(allMyArrays);


// let code: number = 30
// console.log(code)