// function getRandomNumber(max) {
//     return Math.floor(Math.random() * max);
// }


// function createPromiseWithTimeout(){
//     return new Promise(function exe(resolve, reject){
//         console.log("entering executor function");
//         setTimeout(() => {
//             let num = getRandomNumber(10);
//             if (num % 2 === 0) {
//                 resolve(num);
//             } else {
//                 reject(num);
//             }
//         }, 10000);
//         console.log("Promise created, waiting for 10 seconds...");
//     });
// }

// console.log("starting promise creation...");
// const p = createPromiseWithTimeout();
// console.log("Promise created, now waiting for resolution...");
// console.log("Promise state:", p);

// p.then(
//     function fullfilledHandler(value){
//         console.log("promise resolved",value);
//         console.log("Promise state after resolution:", p);
//     },
//     function rejectedHandler(value){
//         console.log("promise rejected",value);
//         console.log("Promise state after rejection:", p);
//         }
// );


/* SEcond example */

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


function createPromiseWithTimeout(){
    return new Promise(function exe(resolve, reject){
        console.log("entering executor function");
        setTimeout(() => {
            let num = getRandomNumber(10);
            if (num % 2 === 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 10000);
        console.log("Promise created, waiting for 10 seconds...");
    });
}

console.log("starting promise creation...");
const p = createPromiseWithTimeout();
console.log("Promise created, now waiting for resolution...");
console.log("Promise state:", p);

p.then(
    function fullfilledHandler(value){
        console.log("promise resolved",value);
        console.log("Promise state after resolution:", p);
        setTimeout(function t(){  console.log("Ended 8d timer")},0);
        console.log("exitting the full handler 1");
    },
    function rejectedHandler(value){
        console.log("promise rejected",value);
        console.log("Promise state after rejection:", p);
        setTimeout(function t(){  console.log("Ended 8d timer reg")},0);
        console.log("exitting the rejected handler 1");
        }
);

console.log("End.........");
setTimeout(function t(){
    console.log("---at last---")
},1000);