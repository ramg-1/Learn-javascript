const account_id=1212121
let account_email="ram@google.com"
var account_password=2121212
account_city="patna"

//account_id=5555555  not allowed

account_email="ramg@google.com"
account_password=111111111
account_city="patliputa"
let account_state;
console.table([account_id,account_email,account_password,account_city,account_state])

/*
prefer not to use var 
due to scope problem
always use let and const
*/

console.log(account_id)