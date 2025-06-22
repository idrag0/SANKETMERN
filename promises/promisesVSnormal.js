function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(resolve,2000);
    });

    return p;
}
const value = kiratsAsyncFunction();
value.then(function(){
    console.log("promise wala methord")
});


// normal way to write the Async function

function normalAsynch(callback){
    setTimeout(callback,3000);
}

normalAsynch(function(){
    console.log("normal wala methord")
})