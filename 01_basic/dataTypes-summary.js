// primitive datatypes (7types)=> Number, String, Boolean, Undefined, Null, BigInt, Symbol.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);

// const bigNumber = 345345938452342424n;

//Reference (Non-Primitive datatypes) => Array, Objects, Functions.

const heros = ["shaktiman","naagraj", "dogs"]
let myObj = {
    name:"Amar",
    age:34,
}

const myfunction = function(){
    console.log("Hello World!")
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof myfunction);