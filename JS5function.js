function add(num1, num2){
    return num1+num2;
}
let result=add(1,2);
   console.log('sum:',result);

//using Anonymous Function
function greet(choice){
    choice();
}
greet(function(){console.log('Hello World')});// Passing function as parameter to another function
//Function as a parameter to another function

function greet(choice){
    let message=choice();
    console.log(message);
}
let message= function(){return 'Hello world'}; //We can store function inside a variable as a parameter
greet(message);

//Functions can be assigned to a variable
// Functions can be passed around as a function Parameter
// Functions can be returned from another function
//First Class Citizen in JavaScript Language
