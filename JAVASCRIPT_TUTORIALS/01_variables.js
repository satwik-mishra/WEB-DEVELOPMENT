// declaration of const keyword: 
const accountId=12345
let accountEmail="satwikmishra074@gmail.com"
var accountPassword="12345"   //prefer not to use var because of issue in block scope and functional scope.
accountCity="Rourkela"       // this technique is not good at all but it works
let accountState;            // if we just declare a variable and not initialize it,js will take is as undefined

// accountId=54321 [const keyword cannot be changed]
console.log(accountId);  

accountEmail="satwikmishra2135@gmail.com"
console.log(accountEmail)
accountPassword="54321"
console.log(accountPassword)
accountCity="Bhubaneshwar"
console.log(accountCity);

// to print multiple variables in a table format : use console.table([accountEmail,accountPassword,accountCity])
console.table([accountEmail,accountPassword,accountCity,accountState])

/*
 this is multiline commnent
*/
