// video 3 => tsconfig.json file
// let price:number = 10;
// let isValid: boolean;

// video 4 =>  Any type
// let title:any = 10;
// title = "ali";
// title = true;

// let book;
// book = "book";
// book = 10;

// function logger(input:any) {
//     console.log(input);
// }

// video 5 => Arrays

// // array of numbers
// const numbers: number[] = [1, 2, 3, 4, 5];

// // array of strings
// const names: string[] = ["ali", "ahmed", "mohamed"];

// // array of mixed types
// const mixed: (number | string)[] = [1, "ali", 2, "ahmed", 3, "mohamed"];

// // array of any types
// const array:any = [1, "ali", 2, false, 3, "mohamed"];

// video 6 => Tuples

// const employee: [number, string] = [1, "ali"];
// const user: [number, string, boolean] = [1, "ali" , false];

// video 7 => Enum

// javascript way
// const small = 0;
// const medium = 1;
// const large = 2;

// typescript way (enum)

// enum Size {
//     Small,
//     Medium,
//     Large
// }

// let mySize1: Size = Size.Small;
// console.log(mySize1); //0

// let mySize2: Size = Size.Medium;
// console.log(mySize2);//1

// let mySize3: Size = Size.Large;
// console.log(mySize3);//2

// // we can add default values to enum

// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 3
// }

// enum User {
//     Admin = "admin",
//     Customer = "customer",
// }

// video 8 => Functions

// 1. function without return type (void)
// function sum1(x: number, y: number): void {
//     const result = x + y;
// }
// // 2. function return type
// function sum2(x: number, y: number):number{
//     const result = x + y;
//     return result;
// }

// const result1 = sum1(1, 2);
//  console.log("without return type (void) " + result1); //without return type (void) undefined

// const result2 = sum2(1, 2);
// console.log("with return type " + result2); //with return type

// function getFullName(name:string, family:string):string {
//     return name + " " + family;
// }

// video 9 => Objects

// const user1:{
//     id:number,
//     name:string,
//     email:string,
//     password?:string,
//     isActive: boolean,
//     getFullName: (fullName:string) => string
// } = {
//     id: 1,
//     name: "ali",
//     email: "ali@gmail.com",
//     password: "123",
//     isActive: true,
//     getFullName: (fullName:string) => fullName
// }

// const user2:{
//     id:number,
//     name:string,
//     email:string,
//     password?:string,
//     isActive: boolean,
//     getFullName: (fullName:string) => string
// } = {
//     id: 2,
//     name: "mohamed",
//     email: "mohamed@gmail.com",
//     password: "123",
//     isActive: true,
//     getFullName: (fullName:string) => fullName
// }

// don't repeat yourself

// type alias
// type User = {
//     readonly id:number, // can't change
//     name:string,
//     email:string,
//     password?:string, // optional
//     isActive: boolean,
//     getFullName: (fullName:string) => string
// }

// const user1:User = {
//     id: 1,
//     name: "ali",
//     email: "ali@gmail.com",
//     password: "123",
//     isActive: true,
//     getFullName: (fullName:string) => fullName
// }

// const user2:User = {
//     id: 2,
//     name: "mohamed",
//     email: "mohamed@gmail.com",
//     password: "123",
//     isActive: true,
//     getFullName: (fullName:string) => fullName
// }

// video 10 => Union Type الاتحاد

// let review: number | string;
// review = 5;
// review = "5 stars";

// function getRating(rating:number | string):number | string {
//     if(typeof rating === "number") {
//         return 123;
//     }else{
//         return "123";
//     }
// }

// console.log(getRating(5)); // 123
// console.log(getRating("5")); // '123'

// video 11 => Intersection type التقاطع

// type Details = {
//     title:string,
//     descreption:string,
//     price:number
// };

// type Author = {
//     authorName:string,
//     country:string
// }

// type Book = Details & Author;

// const newBook:Book = {
//     title: "typescript",
//     descreption: "typescript book",
//     price: 100,
//     authorName: "ali",
//     country: "egypt"
// }

// // literal type
// type Price = 10 | 20;
// let price : Price;
// price = 50; //error

// video 12 => unknown & never type

// unknown type

// function checkTypes(input:unknown):void {
//     if (typeof input === "string") {
//         input.toLowerCase(); //string
//     }

//     if (typeof input === "number") {
//         input.toFixed(); //number
//     }

//     if (typeof input === "boolean") {
//         input.valueOf(); // boolean
//     }

// }

// never type

// function generateError(message:string):never {
//     throw new Error(message);
//     console.log("this code is not reachable");
// }

// video 13 => OOP

//car proprietary (color / speed)
//car methods (move() / stop())

// video 14 => class & object

// class Account {
//     // properties
//     id:number = 0;
//     owner:string = "";
//     balance:number = 0;

//     constructor(id:number, owner:string, balance:number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     // methods
//     deposit(amount:number):void {
//         if(amount <= 0) {
//             throw new Error("amount must be greater than 0");
//         }
//         this.balance += amount;
//     }
// }

// let account = new Account(1, "ali", 100);
// account.deposit(100);
// console.log(account.balance);

// video 15 => instanceof keyword

// class Account {
//     // properties
//     readonly id:number = 0; // can't change
//     owner:string = "";
//     balance:number = 0;
//     username?:string; // optional

//     constructor(id:number, owner:string, balance:number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     // methods
//     deposit(amount:number):void {
//         if(amount <= 0) {
//             throw new Error("amount must be greater than 0");
//         }
//         this.balance += amount;
//     }
// }

// let Aliaccount = new Account(1, "ali", 100);

// console.log(Aliaccount instanceof Account); // true

// class Car {};

// console.log(Aliaccount instanceof Car); // false

// video 16 => Access Modifiers

// class Account {
//     // properties
//     readonly id:number = 0; // can't change
//     owner:string = "";
//     private balance:number = 0;
//     username?:string; // optional

//     constructor(id:number, owner:string, balance:number) {
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     // methods
//     deposit(amount:number):void {
//         if(amount <= 0) {
//             throw new Error("amount must be greater than 0");
//         }
//         this.balance += amount;
//     }

//     getBalance():number {
//         return this.balance;
//     }
// }

// let account = new Account(1, "ali", 100);

// console.log(account.getBalance()); // 100

// video 17 => Parameter Properties

// class Account {
//     // first way
//     // readonly id:number = 0; // can't change
//     // owner:string = "";
//     // private _balance:number = 0;
//     // username?:string; // optional

//     // constructor(id:number, owner:string, balance:number) {
//     //     this.id = id;
//     //     this.owner = owner;
//     //     this._balance = balance;
//     // }

//     // second way (parameter properties)
//     username?:string; // optional
//     constructor(public readonly id:number, public owner:string, private _balance:number){
//         this.id = id;
//         this.owner = owner;
//         this._balance = _balance;
//     }

//     // methods
//     deposit(amount:number):void {
//         if(amount <= 0) {
//             throw new Error("amount must be greater than 0");
//         }
//         this._balance += amount;
//     }

//     getBalance():number {
//         return this._balance;
//     }
// }

// let account = new Account(1, "ali", 100);

// console.log(account.getBalance()); // 100

// video 18 => getter & setter

// class Account {
//         // first way
//         readonly id:number = 0; // can't change
//         owner:string = "";
//         private _balance:number = 0;
//         username?:string; // optional

//         constructor(id:number, owner:string, balance:number) {
//             this.id = id;
//             this.owner = owner;
//             this._balance = balance;
//         }

//         // methods
//         deposit(amount:number):void {
//             if(amount <= 0) {
//                 throw new Error("amount must be greater than 0");
//             }
//             this._balance += amount;
//         }

//         // getBalance():number {
//         //     return this._balance;
//         // }

//         // getter
//         get balance():number {
//             return this._balance;
//         }

//         // setter
//         set balance(value:number) {
//             if(value <= 0) {
//                 throw new Error("amount must be greater than 0");
//             }
//             this._balance = value;
//         }
//     }

//     let account = new Account(1, "ali", 100);
//     account.balance = 400;
//     console.log(account.balance); // 400

// video 19 => static methods & static properties

// class Account {
//     // first way
//     readonly id:number = 0; // can't change
//     owner:string = "";
//     private _balance:number = 0;
//     username?:string; // optional
//     static color:string = "red";
//     private static _members:number = 0;

//     constructor(id:number, owner:string, balance:number) {
//         this.id = id;
//         this.owner = owner;
//         this._balance = balance;
//         Account._members += 1;
//     }

//     // methods

//     static getMembers():number {
//         return Account._members;
//     }
//     deposit(amount:number):void {
//         if(amount <= 0) {
//             throw new Error("amount must be greater than 0");
//         }
//         this._balance += amount;
//     }

//     static logger():void {
//         console.log("this is a static method");
//     }

//     // getBalance():number {
//     //     return this._balance;
//     // }

//     // getter
//     get balance():number {
//         return this._balance;
//     }

//     // setter
//     set balance(value:number) {
//         if(value <= 0) {
//             throw new Error("amount must be greater than 0");
//         }
//         this._balance = value;
//     }
// }

// const user1 = new Account(1, "ali", 100);
// const user2 = new Account(2, "mohamed", 200);

// console.log(Account.color); // red
// Account.logger(); // this is a static method
// console.log(Account.getMembers()); // 2

// video 20 => Inheritance (extends)
// video 21 => Fixing a bug
// video 22 => inherited constructor (person => teacher & teacher => professor)
// video 23 => protected member

// class Person {
//     constructor(public firstName: string, public lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName(): string {
//         return this.firstName + " " + this.lastName;
//     }

//     walk(): void {
//         console.log("walking");
//     }

//     protected drinkCoffe(): void {
//         console.log("drinking coffe");
//     }

// }

// class Student extends Person {
//     constructor(firstName: string, lastName: string, public studentId: number) {
//         super(firstName, lastName);
//         this.studentId = studentId;
//     }

//     override get fullName(): string {
//         return "student: " + super.fullName;
//     }

//     study(): void {
//         this.drinkCoffe();
//         console.log("studying");
//     }
// }

// class Teacher extends Person {
//     constructor(firstName: string, lastName: string, public teacherId: number) {
//         super(firstName, lastName);
//         this.teacherId = teacherId;
//     }

//     override get fullName(): string {
//         return "teacher: " +  super.fullName;
//     }

//     tech(): void {
//         this.drinkCoffe();
//         console.log("teaching");
//     }
// }

// class Professor extends Teacher {

// }

// class Employee extends Person {
//     override get fullName(): string {
//         return "employee: " + super.fullName;
//     }
// }

// let student = new Student("ali", "ahmed", 1);
// let teacher = new Teacher("mohamed", "mohamed", 1);
// let employee = new Employee("shady", "mohamed");
// let professor = new Professor("shady", "mohamed", 3);

// video 24 => Method Overriding (add override to the method)

// console.log(student.fullName);
// console.log(teacher.fullName);
// console.log(employee.fullName);

// video 25 => Polymorphism (abstract class) تعدد الاشكال

// let student = new Student("shady", "mohamed", 1);
// let teacher = new Teacher("shady", "mohamed", 1);
// let employee = new Employee("shady", "mohamed");

// const people: Person[] = [student, teacher, employee];

// for (const element of people) {
//     console.log(element.fullName);
// }

// video 26 => Index Signature

// class User {
//     [key: string]: string | boolean; // index signature
// }

// let user = new User();
// user.name = "ali";
// user.email = "ali@gmail.com";
// user.isStudent = true;
// user["family"] = "ahmed";

// console.log(user);

// video 27, 28 => Abstract Class & Method

// abstract class Payment {
//     constructor(public currency: string) {}
//     abstract pay():void ;

//     protected paid():boolean {
//         return true;
//     }

//     protected noPaid():boolean {
//         return false;
//     }
// }

// class paymentWithUSD extends Payment {
//     constructor(currency: string) {
//         super(currency);
//     }
//   override pay():void {
//       console.log("paying with USD");
//   }
// }

// class paymentWithEGP extends Payment {
//     constructor(currency: string) {
//         super(currency);
//     }
//   override pay():void {
//         console.log("paying with EGP");
//   }
// }

// const payment1 = new paymentWithUSD("USD");
// const payment2 = new paymentWithEGP("EGP");

// console.log(payment1); // paymentWithUSD { currency: 'USD' }
// console.log(payment2); // paymentWithEGP { currency: 'EGP' }

// video 29 => interface

// interface Auth {
//     register(username: string, email: string, password: string):void;
//     login( email: string, password: string):void;
//     role: string;
// }

// class User implements Auth {
//     register(username: string, email: string, password: string): void {
//         console.log(`registering user: ${username}, ${email}, ${password}`);
//     }
//     login(email: string, password: string): void {
//         console.log(`login user: ${email}, ${password}`);
//     }
//     role: string = "user";
// }

// interface Book {
//     title: string;
//     author: string;
// }

// const newBook : Book = {
//     title: "book",
//     author: "ali"
// }

// video 30, 31 => Encapsulation

// class Payment {
//     private balance: number = 500;

//     get myBalance(): number {
//         return this.balance;
//     }

//     set myBalance(value: number) {
//         this.balance = value;
//     }
// }

// const payment = new Payment();
// console.log(payment.myBalance); // 500
// payment.myBalance = 1000; // 1000
// console.log(payment.myBalance); // 1000

// video 32 => Generic Class

// class Product <Type1, Type2>{
//     constructor(public title:Type1, public price:Type2) {}
// }

// const product1 = new Product<string, number>("book", 100);
// const product2 = new Product<boolean, number>(true, 10);

// video 33 => Generic Functions

// function getValue<T>(value:T): T {
//     return value;
// }

// console.log(getValue<string>("hello")); // hello
// console.log(getValue<number>(123)); // 123
// console.log(getValue<boolean>(true)); // true

// video 34 => Generic Interfaces Part 1

// interface Product <T>{
//     item: T,
//     price: number,
//     description: string
// }

// type Book = {
//     title: string,
//     author: string
// }

// const book: Product<Book> = {
//     item: { title: "book", author: "ali" },
//     price: 100,
//     description: "this is a book"
// }

// // video 35 , 36 , 37 => Generic Interfaces Part 2

// type Book = {
//   title: string;
//   author: string;
//   numberOfPages: number;
// };
// interface IProduct<T> {
//   createProduct(product: T): T;
//   saveProductToDB(product: T): void;
// }
// // Example 1:
// class Product1 implements IProduct<Book> {
//   createProduct(product: Book): Book {
//     product = {
//       title: "Book 1",
//       author: "Author 1",
//       numberOfPages: 110,
//     };
//     return product;
//   }
//   saveProductToDB(product: Book): void {
//     console.log(product);
//   }
// }

// video 38 => keyof Operator


