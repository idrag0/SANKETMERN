// Example 1: Simple Callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sanket", sayGoodbye);

// Example 2: Using setTimeout (Asynchronous Callback)
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Sample Data");
    }, 2000);
}

function processData(data) {
    console.log("Processing: " + data);
}

fetchData(processData);

// Example 3: Array Methods with Callbacks
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log("Number: " + number);
});

const doubled = numbers.map((number) => number * 2);
console.log("Doubled Numbers: ", doubled);