
console.log("Hello, World!");
setTimeout(function exe() {
    console.log("This is a delayed message after 3 seconds");
    setTimeout(function exe2() {
        console.log("This is a delayed message after 5 seconds");
    }, 10);
}, 0);
for (let i = 0; i < 1000000000; i++) {
    // Simulating a time-consuming task
}   

console.log('end of the program 2'); 