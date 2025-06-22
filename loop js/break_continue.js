// break

let i = 0;
while (i < 10) {
    if (i == 5) {
        break;
    }
    console.log(i);
    i++;
}

//nested loop
console.log("**********");

let l = 0;
while(l<30){
    while(l<10){
        if(l % 7 == 0){
            l++; // Increment l after breaking out of the inner loop
            break;
        }
        l++;
    }
    l++;
}

// continue
console.log("**********")

let j = 0;
while (j < 10) {
    if (j == 5) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}

console.log("**********")
// nested loop continue
let k = 0;
while(k<20){
    while(k<10){
        if(k % 7 == 0){
            k++;
            continue;
        }
        console.log(k);
        k++;
    }
}