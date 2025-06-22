
function createPromise(){
    return new Promise(function exe(resolve, reject){
        let x = setTimeout(function getvalue(){
            resolve(2);
        }, 1000);

        if(x%2 === 0){
            resolve("sucessfully resolved");
        }else{
            reject("rejected");
        }
    });
}

y = createPromise();