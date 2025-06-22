

function fun(){
    console.log("the value x: ", x); // undefined 
    var x = 5;
    console.log("the value x: ", x); // 5

}
fun();
console.log("the value x: ", x); // ReferenceError: x is not defined

