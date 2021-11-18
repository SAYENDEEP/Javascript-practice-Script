//Declaring a simple array
let phones=[1100,'Oneplus 6t',6300];
console.log('Phones Array', phones);
console.log('Phones array length:',phones.length);

for(let i=0;i<phones.length;i++){
    console.log('Index:',i,'Array element:',phones[i]);
}
phones[3]='iPhone X';
phones.push('K2');//pushing a element inside in  the array
console.log(phones);
phones.pop();
console.log(phones);
//In case of foreach function we can pass function as a paramter 
phones.forEach((element)=>{console.log('Array element',element)});
//Use of map-- mainly used to create a mapped array
//Map array: An array created after applying some transformation to the existing array
let mappedarray =phones.map((phone)=>{
    if(typeof phone=== 'string'){
        return phone.toUpperCase();
    }else{
        return phone;
    }
})

console.log('Mapped array:',mappedarray);

let mapped1array =phones.map((phone)=>{
    if(typeof phone=== 'string'){
        return phone.toUpperCase(); 
    }
})

console.log('Mapped array:',mappedarray);

//Filter -- filter the array elements based on some condition

let filteredPhones = phones.filter(()=>{
  return typeof phones==="string";
})

console.log('Filtered array:',filteredPhones);
//According to the value returnn true 
//return  the first element found in the array based on callback
let foundPhone= phones.find((phone)=>{return phone ==='Oneplus 6t'}); //Based on inner function true it will return
console.log('Element found:',foundPhone);
