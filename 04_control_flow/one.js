//if
const IsuserLoggedIn = true;
const temperature = 40;

// if (temperature < 50){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


// if(2 === "2"){
//     console.log("Executed");
// };

// const score = 200;
// if (score >100){
//     const Power ="fly";  //Var scope is completely global so we can not use var. 
//     console.log(`user Power: ${Power}`);
// }
// console.log(`user Power: ${Power}`);

const balance = 1000;
// if (balance >500) console.log("test"),console.log("test2");

// if (balance < 500){
//     console.log("less than");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");   
// }

const userLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedInFromEmail = true
if(userLoggedIn && debitCard){ //and (&&)meaning both are true
    console.log("Allow to buy the course");
}

if(loggedFromGoogle || loggedInFromEmail){ //or (||)meaning any one is true.
    console.log("User logged in");
}
