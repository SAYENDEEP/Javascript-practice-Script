let myString=' Aeroplane';

console.log('First character of mystring',myString[0]);

// Finding the index of character or word at the location
let index = myString.indexOf('plane');
console.log(index);

let index1 = myString.indexOf('water');
console.log(index1);
// Doing reverse of the above
let charat = myString.charAt(6);
console.log('Character at 6 index:',charat);
//To divide the array according to the given character
let splitarr= myString.split('e');
console.log('Splitted array:',splitarr);

// To extract some characters from the existing string we the can use substr() method 
let substr = myString.substr(0,4);
console.log(substr);

//To extract characters from a strin g using the  starting and ending index use the substring() method

let substring = myString.substring(2,5);

console.log('substring:',substring);

// We can use uppercase and lowercase to convert
let uppercasestring =myString.toUpperCase();
let lowercasestring =myString.toLowerCase();
console.log('Uppercasestring'+uppercasestring,'lowercase:'+lowercasestring);





