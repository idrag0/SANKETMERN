
function createPromise(){
    return new Promise( function exe (resolve ,reject){
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout( function process(){
    console.log("Timer  completed")
},0);

let p = createPromise();

p.then(function fullfilledHandler1(value){
    console.log("er fullfilled 1 with a value", value);

},
function rejectedHandler1(){})

p.then(function fullfilledHandler2(value){
    console.log("er fullfilled 2 with a value", value);

},
function rejectedHandler2(){})

p.then(function fullfilledHandler3(value){
    console.log("er fullfilled 3 with a value", value);

},
function rejectedHandler3(){})

for(let i =0 ; i<100000000; i++){}

console.log("---ending---");