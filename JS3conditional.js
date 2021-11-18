let n=10;
if(n>0){
  console.log('n is positive');
}else if(n<0){
    console.log('n is negative');
}else{
    console.log('n is zero');
}
let age=23;
let status= age>=18?'Eligible':'Not eligible';
console.log('Status is:-'+ status);

let choice='c';
switch(choice){
  case 'a': console.log('Trip to Paris');
            break;
  case 'b': console.log('Trip to New York');
            break;
  default:console.log('Trip to Switzeland');
}

