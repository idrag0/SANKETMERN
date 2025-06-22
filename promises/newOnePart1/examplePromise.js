
function gerRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve, reject){
        for(let i=0; i< 100000000; i++){}
        let num = gerRandomNumber(10);

        if(num % 2 === 0){
            resolve(num);
        }else{
            reject(num);
        }
    });
} 

let x = createPromiseWithLoop();

x.then(result => {
    console.log("Resolved with:", result);
}).catch(error => {
    console.log("Rejected with:", error);
});
