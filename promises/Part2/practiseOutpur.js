function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("Started downloading from", url);
        // Simulate a network request
        setTimeout(function processDownload(){
            let data = "dummy data";
            console.log("download completed from", url);
            resolve(data);
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("asdfasd");

promiseObj.then(function A(value){
    console.log("value is", value);
})

console.log("End");
