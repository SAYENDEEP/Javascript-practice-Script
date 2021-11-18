//It may produce a single value sometime in future

let isMomhappy = false;

function momsGift(){
    return new Promise(function(resolve,reject){
        if(isMomhappy){
            let phone ={
                name :'Iphone',
                cost : 100000
            };
            resolve(phone);
        }else{
            reject(new Error('Have you seen your score card'));
        }
    })
}
let  surprise = momsGift();
// In order to get the data which was sent as a parameter during the
//promise resolution we need to use the .then() method
surprise.then(function(successresponse){
 console.log(successresponse);
}).catch(function(errorresponse){
  console.log(errorresponse);
})