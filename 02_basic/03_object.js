// Singleton

//Object literals
const mysym = Symbol("mykey1");

const jsUser = {
    name: "Amar",
    "full Name": "Amar Kumar",
    [mysym]: "mykey1",
    age: 19,
    loaction: "Patna",
    email: "amar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
};

//excessing value
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mysym]);

//changing value
jsUser.email = "amarKumar8544@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "amar@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())