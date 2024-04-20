// interface Item {
//   name: string
//   price: number

//   itemPurchased(message: string): void

// }

// let product1: Item

// product1 = {
//   name: 'Apple',
//   price: 2,
//   itemPurchased(message: string) {
//     console.log(message + ' ' + this.name)
//   }
// }

// product1.itemPurchased('You just bought a')


// Exercicio 1
// interface Product {
//   id: number
//   title: string
//   variantId?: number
// }

// function addToCart(item: Product) {
//   console.log(`Adding ${item.title} to cart`)
// }

// addToCart({id: 1, title: 'shoes'})



// Exercicio 2
// interface Person {
//   name: string
//   age: number
// }

// class Person implements Person {
//   constructor(public name: string, public age: number) {
//   }
// }
// const jane = new Person('Jane', 31);

// console.log(`${jane.name} is ${jane.age} year old`)



// Exercicio 3
// class MC {
//   greet(event: string = 'party'): string {
//     return `Welcome to the ${event}`
//   }
// }

// const mc = new MC()
// console.log(mc.greet('show'))



// Exercicio 4
// class Employee {
//   constructor(public title:string,public salary:number) {}
// }

// const employee = new Employee('Engineer', 10000)

// console.log(`The new employee title is ${employee.title} and his salary is ${employee.salary}`)



// Exercicio 5
// interface UserSchema {
//   id: number
//   name: string
// }

// class User implements UserSchema {
//   constructor(public name: string,readonly id:number){}
// }

// const user = new User('Dog', 1)
// console.log(user.id)

// user.name = 'Harold' // pode mudar
// // user.id = 5 // não pode mudar

// console.log(`User: `, user)