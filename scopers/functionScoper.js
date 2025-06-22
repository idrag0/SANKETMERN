
var x = 20;

function scopr(){
    var x = 10;
    var y = "inside function";
    console.log(x);
}

scopr();
console.log(x);
console.log(y);
// Output: 10]