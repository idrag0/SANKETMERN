function process(){
    let i = 0;
    function innerProcess(){
        i += 1;
        return i;
    }

    return innerProcess; // we are not calling the function here, we are returning the function 

}


let result = process(); // result is a function
console.log(result()); // 1
console.log(result()); // 2
console.log(result()); // 3
console.log(result()); // 4
console.log(result()); // 5
console.log(result()); // 6