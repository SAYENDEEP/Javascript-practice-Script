// Three Scope---> 1)Global 2) Local 3) Block Scope
// let globalVar ='Global variable';

// function demo(){
//     let localVar='Local Variable';
//     console.log(globalVar);
//     console.log(localVar);
// }
// demo();
let globalVar ='Global variable';

function demo(){
     localVar='Local Variable';  // If we do not declare the let keyword then bydefault it will take global scope
    
}
demo();
    console.log(globalVar);
    console.log(localVar);

