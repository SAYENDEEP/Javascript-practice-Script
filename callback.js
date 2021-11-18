//It is a function that is executed after another function has completed its execution
function j1(callback){
    setTimeout(function()
    {
    console.log('job1');
    callback();
},2000);
}
function j2(){
    console.log('job2')
}

j1(j2);
