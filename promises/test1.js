// // the ugly way to write promises

// const fs = require('fs');

// // my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("./a.txt", "utf-8", function(err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile(onDone)

// right way to write

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("./a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);