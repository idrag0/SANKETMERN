// using call backs
// 1. write a funtion to download data from a url
// 2. write a function to save that download data in a file and return the filename
// 3. write a function to upload the file written in previous step to a new url

function download(url, cb){
    console.log("downloading from ", url);
    setTimeout(function processDownload() {

        console.log("downloaded data from",url);
        const content = "asdf asdf";
        cb(content);
    },4000);
}

download("www.abc.com", function process(content){
    console.log("download data is",content);
})


function writeFile(data, cb){
    console.log("started weriting file", data);
    setTimeout(function processWrite() {
        console.log("completed writing file");
        const fileName = "file.txt";
        cb(fileName);
    }, 2000);
}

writeFile("data to write", function process(fileName){
    console.log("file written with name", fileName);
});

function uploadFile(url, fileName, cb){
    console.log("started uploading file", fileName, "to", url);
    setTimeout(function processUpload() {
        console.log("completed uploading file");
        const response = "success";
        cb(response);
    }, 3000);
}

download("www.abc.com", function processDownload(content){
    console.log("we are now going to process", content);
    writeFile(content, function processWrite(fileName){
        console.log("we have downloaded and written file");
        uploadFile("www.xyz.com", fileName, function processUpload(response){
            console.log("upload response is", response);
        });
    });
});