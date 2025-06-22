// // example form MDN 

// Promise.resolve("foo")
// .then(string => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             string += "bar";
//             resolve(string);
//         }, 10000);
//     });
// })

// .then(string => {
//     setTimeout(() => {
//         string += "baz";
//         console.log(string); // "foobarbaz"
//     }, 1);
//     return string;
// })  

// .then((string) => {
//     console.log("sdfasfjslfdjsadfaslfds sldfjasf as  sdj; fa")
// })


// easy version of the above code
Promise.resolve("foo")
  .then( function fh1(value) {
    return Promise.resolve(value + "bar");
  })

    .then( function fh2(value) {
        setTimeout(function exe(){
            value += "baz";
            console.log(value); // "foobarbaz"
        }, 1);
        return value;
    })

    .then( function fh3(value) {
        console.log("from fhe3:", value); // "foobar"
    })