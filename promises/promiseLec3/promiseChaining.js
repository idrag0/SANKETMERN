
function download(url){
    console.log(`Downloading from ${url}`);

    return new Promise(function exe(res,rej){
        setTimeout(function p(){
            console.log("completed download in 5 seconds");
        const content = "ABCD";
        res(content);       
        },5000);
    })
}

let x = download("https://example.com/file.txt");
let y = x.then(function contentHandler(content){
    console.log("Content received:", content);
    return "new promise String";
})

y.then(function newContentHandler(newContent){
    console.log("New content received:", newContent);
}).catch(function errorHandler(err){
    console.error("Error:", err);
});

