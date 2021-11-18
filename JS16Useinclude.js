var MeanStack=['MongoDB','Express','Angular','Node'];
var iResult=MeanStack.includes('Angular');
var iResultReact=MeanStack.includes('React');
console.log(iResult);
if(iResult){
    console.log("Angulatr is present in the array");
}
else{
    console.log("Angular is not present in the array");
}
if(iResultReact){
    console.log("React is present in the array");
}
else{
    console.log("React is not present in the array");
}