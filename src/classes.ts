// class Users {
//   name: string
//   private balance: number

//   constructor(n: string, b: number) {
//     this.name = n
//     this.balance = b
//   }

//   addMoney(amount: number) {
//     this.balance += amount
//   }

// }

// const user1 = new Users('Enzo', 50)
// const user2 = new Users('Andre', 30)

// console.log(user1)
// user1.addMoney(50)
// console.log(user1)



// class Movies {
//   constructor(
//     public readonly id:number,
//     public name: string, 
//     private _price: number
//   ) {
//   }
// }
// let movie1 = new Movies(1, 'Dejavu', 5)
// console.log(movie1.id)


// Index Signatures
// class HotelRooms {
//   [roomNumber: string]: string
// }
// let room = new HotelRooms()
// room.A201 = 'Andre'
// room.A202 = 'Ana'
// room.A17 = 'Bolsonaro'
// console.log(room)


// Heranças
// class Person {
//   constructor(public firstName: string, public lastname: string, public age:number){}

//   get greet() {
//     return this.firstName + ' ' + this.lastname
//   }
// }

// // Cliente do Banco
// class Clients extends Person {
//   override get greet() {
//     return 'Dear ' + super.greet
//   }
// }

// // Funcionario do Banco
// class Staff extends Person {
//   override get greet() {
//     return 'Hi ' + super.greet
//   }
// }

// let client1 = new Clients('Enzo', 'Gois', 20)
// let staff1 = new Staff('Ana', 'Silva', 25)
// console.log(client1.greet)
// console.log(staff1.greet)