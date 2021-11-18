function j1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve('j1output')},2000);
    })
}

function j2(j1o){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(j1o +'--j2ouput')},3000);
    })
}


async function totaloutput(){
  let j1o = await j1();
  let j2o= await j2(j1o);
}
// Whenever there is an await keyword the code will wait for the promise to be resolved
//  await keyword can be used only inside the async functions