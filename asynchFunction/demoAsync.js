// 04/06/2025 12:56 pm 

function timeConsumingByloop(){
    console.log("loop started");
    for(let i=0; i<1000000000; i++){
        // Simulating a time-consuming task
    }

    console.log("loop ended");
}

function tiemconsumingyRuntime0(){
    console.log("Staring timer 0");

    setTimeout(function exe(){
        console.log("completed the timer 0");
        for(let i=0; i<1000000000; i++){  
            // Simulating a time-consuming task
        }
    },5000);
}

function tiemconsumingByruntime1(){
    console.log("timer started 1");
    setTimeout(function exe(){
        console.log("completed the timer 1");
    }, 0);
    console.log("timer ended 1");
        
}

function tiemconsumingyRuntime2(){
    console.log("timer started 2");
    setTimeout(function exe(){
        console.log("completed the timer 2");
    }, 2000);
    console.log("timer ended 2");
}


console.log("hi there");
timeConsumingByloop();
tiemconsumingyRuntime0();
tiemconsumingByruntime1();
tiemconsumingyRuntime2();
timeConsumingByloop();
console.log("end of the program"); 