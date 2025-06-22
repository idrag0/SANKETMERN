let count = 0;

let y = setInterval(function exe() {
    count++;
    console.log(count);
    if (count > 15) {
        clearInterval(y);
        console.log("Interval cleared");
    }

}, 2000);