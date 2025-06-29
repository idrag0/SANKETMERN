 
function* fetchNextElement(){
    console.log("I am a generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle");
    yield 3;
    yield 4;
    yield 5;
    console.log("I am done");
}

const iter = fetchNextElement();
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: false }
console.log(iter.next()); // { value: undefined, done: true }
console.log(iter.next()); // { value: undefined, done: true }