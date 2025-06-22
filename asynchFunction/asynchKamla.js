
const fs = require("fs");

fs.readFile("./asynchFunction/file.txt", "utf-8" , function(err,data){
    console.log(data);
});  // because async function

setTimeout(function (){
    console.log("second Function");
},1000);

console.log("sffasf")
