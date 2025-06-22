
function blocking_for_loop(){
    for (let i = 0; i < 1e9; i++) {
        // Simulating a long-running task
    }
}


console.log("Start of file");  //1

setTimeout(function timer1(){
    console.log("Timer 1 completed");  // 6
}, 0);

blocking_for_loop();

let x = Promise.resolve("SAnket's Promise");
x.then(function(value){
    console.log("who's promise is this?", value);  // 3
    blocking_for_loop();
});

let y = Promise.resolve("Another Promise");
y.then(function(value){
    console.log("Another promise resolved:", value);  // 4
    setTimeout(function(){console.log("ok done")}, 0); // 8
});

let z = Promise.resolve("Yet Another Promise");
z.then(function(value){
    console.log("Yet another promise resolved:", value);  // 5
});


setTimeout(function timer2(){
    console.log("Timer 2 completed"); // 7
}, 0);

console.log("End of file");   // 2