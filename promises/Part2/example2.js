console.log("Start");

setTimeout(function timer1(){
    console.log("Timer 1 completed");
},0);

for(let i = 0; i < 1000000000; i++) {
    // Simulating a long-running task
}

let x = Promise.resolve("SAnket's Promise");
x.then(function(value){
    console.log("who's promise is this?", value);
});

setTimeout(function timer2(){
    console.log("Timer 2 completed");
}, 0);

console.log("End"); 