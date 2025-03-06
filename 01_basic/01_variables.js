const accountId = 1245; // it can't be changed
let accountEmail = "amarkumar79180@gmail.com";
var accountPassword = "12355";
accountCity = "Jaipur";
let accountState;


// accountId = 34; //not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com";
accountPassword = 1245685;
accountCity = "Bengaluru";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);