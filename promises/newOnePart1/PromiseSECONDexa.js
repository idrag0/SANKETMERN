function gerRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(() => {
            
            let num = gerRandomNumber(10);

            if (num % 2 === 0) {
                resolve(num);
            } else {
                reject(num);
            }
    }, 10000);
});   }          

let x = createPromiseWithLoop();

x.then(result => {
    console.log("Resolved with:", result);
}).catch(error => {
    console.log("Rejected with:", error);
});