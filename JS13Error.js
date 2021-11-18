function demo(){
    try{
        let bike = newbike;
    }catch(error){
        if(error instanceof ReferenceError){
        console.log('Reference Error occured',error.message);
        }else if(error instanceof TypeError){
      console.log('Type Error occured',error.message);
        }else{
            console.log('Some Error Occured',error.message);
        }
    }finally{
        console.log('hello');
    }
}
demo();