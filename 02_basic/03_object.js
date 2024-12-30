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

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//04_object.js

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Amar";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sohan@gmail.com",
    fullname: {
        userfullName: {
            firstname: "amar",
            lastName: "Kumar"
        } 
    }
}
// console.log(regularUser.fullname)

const obj1 ={1: 'a', 2: 'b'};
const obj2 ={3: 'a', 4: 'b'};

// const obj3 = { obj1, obj2};
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Day 03
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]