// task (don't use callbacks, use promises):
// 1. write a function to download data from a url
// 2. write a function to save that download data in a file
// 3. write a function to upload the file written in previous step to a new url

function download(url){
    console.log("Start donwloading from", url);

    return new Promise(function exe(res,rej){
        setTimeout(function down(){
            console.log("download completed form",url);
            const content = "abcdef";
            res(content);
        },5000)
    })
}

function writeFile(data){
    console.log("Start writting file",data);

    return new Promise(function exe(res, rej){
        setTimeout(function write(){
            console.log("writing completed")
            const filename = "file.txt";
            res(filename);
        },2000)
    })
}


function uploadFile(url,filename){
    console.log("start uploading file",filename,"to",url);
    return new Promise(function exe(res,rej){
        setTimeout(function up(){
            console.log("File uploaded to ",url);
            const response = "sucess";
            res(response);
        },6000)
    })
}

let x = download("www.drago.com")
x.then(function processDownload(content){
    console.log("content downloaded is",content);
    return writeFile(content);
})
.then(function processWrite(data){
    console.log("writing File Completed with name",data);
    return uploadFile(data,"www.pubg.com")
})
.then(function processUpload(value){
    console.log("we have upload data with", value);
})