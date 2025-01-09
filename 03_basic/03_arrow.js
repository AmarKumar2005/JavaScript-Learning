const user = {
    username: "Amar",
    price: 450,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Amar"
//     console.log(this.username);
// }
// chai();


// const chai = function chai(){
//     let username = "Amar"
//     console.log(this.username);
// }
// chai();


// const chai = chai => {
//     let username = "Amar"
//     console.log(this);
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 +num2
// }
// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1 +num2
const addTwo = (num1, num2) => (num1 +num2)

console.log(addTwo(3,5));