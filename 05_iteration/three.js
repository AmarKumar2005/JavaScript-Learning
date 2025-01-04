// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Worlds";
for (const greet of greetings) {
    // console.log(greet);   
}


//map
const map = new Map()
map.set('IN','India')
map.set('US', 'UNITED STATES OF AMERICA')
map.set('Fr', 'France')

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    game1 : 'BGMI',
    game2 : 'spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ":-", value);
}