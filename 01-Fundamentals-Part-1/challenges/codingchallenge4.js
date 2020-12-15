
const bill = 430;
let tip;
let totalValue;

bill > 50 && bill < 300 ? tip = bill * .15 : tip = bill * .2;


console.log(`The bill is ${bill}, the tip is ${tip} and the total value is ${totalValue = tip + bill}`)