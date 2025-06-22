
        console.log("promise rejected",value);
        console.log("Promise state after rejection:", p);
        setTimeout(function t(){  console.log("Ended 8d timer reg")},0);
        console.log("exitting the rejected handler 1");
        }
);

console.log("End.........");
setTimeout(function t(){
    console.log("---at last---")
},1000 );