

var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("new prome");
    },1000)
})

// function callback(){
//     console.log(d);
// }

function nextfun(){
    console.log("hi, there");
    console.log(d);
}

console.log(d);

// d.then(callback);
d.then(nextfun);

// we also  use promise inside the fuction as well
// outside the function

