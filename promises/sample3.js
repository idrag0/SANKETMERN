// let p = new Promise(function(resolve){
//     resolve("Mr. drago")
// });

// p.then(function(){
//     console.log(p);
// })


//sample

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      resolve("hi there");
    });
    return p;
  }
  
  const value = kiratsAsyncFunction();
  value.then(function(data) {
    console.log(data);
  })