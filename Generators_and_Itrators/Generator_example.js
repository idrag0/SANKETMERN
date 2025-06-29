function* fetchNextElement(){
    console.log("inside generator function");
    const x = 10;

    yield 11;

    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("Value of y is", y);
}

console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log("first",iter.next()); // { value: 11, done: false }

console.log("second",iter.next()); // { value: 30, done: false }
console.log("second",iter.next(55)); // { value: undefined, done: false }
console.log("third",iter.next(17)); // { value: undefined, done: false }
