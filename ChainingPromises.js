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
j1().then(function(j1response){
    return j2(j1response);

}).then(function(j2response){
    console.log(j2response);
})