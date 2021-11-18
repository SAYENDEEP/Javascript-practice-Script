let dateOne = new Date();
console.log('Dateone:',dateOne);

console.log('In milliseconds:',dateOne.getTime());

console.log('Date:',dateOne.getDate());
console.log('Month:',dateOne.getMonth());
console.log('Year:',dateOne.getFullYear());

dateOne.setFullYear(2050,10,07);
console.log('After setting date information:',dateOne);

let today = new Date();

let datediff =(dateOne - today)/(1000*60*60*24);
console.log('Difference days:',Math.floor(datediff));


console.log('Today in string:', today.toLocaleString());
console.log('Only date in string format',today.toLocaleDateString());