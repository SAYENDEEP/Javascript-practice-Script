let regEx1= /^[\w]+@[a-z]+\.(com|in)$/;
//Excecute method give array when pattern matched and null if pattern not matched
// console.log(regEx1.exec('username@gmail.com'));
 //test method if pattern matches it will return true else it will return true
 console.log(regEx1.test('username@gmail.com'));

//Search Method it give the index of starting string
//If it does not present it will return -1
let str='Helloworld';
console.log(str.search(/ello/));

//Match() -It match the substring
//If it does not match it will return null
console.log(str.match(/He/));
//Replace- It is used to find the match between a regular exp and String
console.log(str.replace(/l/,'o'));
 