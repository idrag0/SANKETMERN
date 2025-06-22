

function dosomething(a, b , sum){
    const c = sum(a,b);
    console.log("sum",c);
}

function sum(a,b){
    return a+b;
}

dosomething(3,5,sum);