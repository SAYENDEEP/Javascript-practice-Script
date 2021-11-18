function greet(choice){
    choice();
}

// greet(function(){console.log('Hello World')});
greet(()=>{console.log('Hello World')});// Using Arrow Function
//Arrrow function with two or more parameter we need curly braches
let calculateTripCost=(ticketPrice,noOfPerson)=>{
    let totalCost = ticketPrice * noOfPerson;
    return totalCost;
}
console.log('Total cost'+calculateTripCost(200,5));
//Arrow function with no argument and no parameter
let trip= ()=> console.log('Lets go to trip');
trip('Paris');
//So we can use special symbol as parameter if we use single line 
let trip1 = _ => console.log('Lets go to trip'+ _);
trip1('Paris');