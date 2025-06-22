
function findsum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

console.log("sum : ",findsum(1000));
console.log();


console.log("Async");

function findSumtill100(){
    return findsum(100);
}

setTimeout(findSumtill100,1000);
console.log("helllo");
