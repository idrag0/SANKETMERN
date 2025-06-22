

const arr = [1, 2, 3, 4, 5];

arr.map(function e(element){
    console.log("recieve: ",element);
    return element;
});
// Output: 1 2 3 4 5

const result = arr.map(function (n) {
    if(n == 1) return 1;
    return n * arguments.callee(n-1); // deprecated function, not 
   recommended
    });

    console.log(result.join(' '));

// Output: 1 2 6 24 120