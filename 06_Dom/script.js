// let h2 = document.querySelector('h2');
// h2.innerText = h2.innerText +' From apna college student';
// console.log(h2.innerText);

// let divs = document.querySelectorAll('.box');
// let idx = 1;
// for(div of divs){
//     div.innerText =`new unique value ${idx}`;
//     idx++;
// }

// divs[0].innerText = 'new unique value 1';
// divs[1].innerText = 'new unique value 2';
// divs[2].innerText = 'new unique value 3';
// console.log(divs[0]);

//create a button and display.
// let newbtn = document.createElement("button");
// newbtn.innerText = 'Click me!';
// console.log(newbtn);

// let p = document.querySelector('h2');
// p.before(newbtn);

//Create a heading and display before h2
// let newHeading = document.createElement('h1');
// newHeading.innerText = 'i am Amar Kumar!';
// console.log(newHeading);

// let h = document.querySelector('h2');
// h.before(newHeading);

// let para = document.querySelector('p');
// para.remove();

// newHeading.remove();

let btn = document.createElement("button");
btn.innerText = "click me!";

btn.style.color = "white";
btn.style.backgroundColor = "red";

document.querySelector("body").prepend(btn);

//q2
let para = document.querySelector("p")
para.classList.add("bro");
para.classList.remove("bro")