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
const small = 0;
const medium = 1;
const large = 2;

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

function checkTypes(input:unknown):void {
    if (typeof input === "string") {
        input.toLowerCase(); //string
    }

    if (typeof input === "number") {
        input.toFixed(); //number
    }
    
    if (typeof input === "boolean") {
        input.valueOf(); // boolean
    }
    
}

// never type

function generateError(message:string):never {
    throw new Error(message);
    console.log("this code is not reachable");
}

// video 13 => 

