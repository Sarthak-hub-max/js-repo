const accountId = 144553
let accountEmail = "sarthak@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2

accountEmail = "hsgf.com"
accountPassword = "4321"
accountCity = "bengaluru"


console.log(accountId);

/*
preferr not to use var 
because of issue in block scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity])
