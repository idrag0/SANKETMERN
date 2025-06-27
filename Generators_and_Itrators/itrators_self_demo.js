 
 function fetchNextElement(array){
    let idx = 0;

    function next(){
        if(idx == array[idx]){
            // return undefined;
            return {value: undefined, done: true};
        }

        const nextElement = array[idx];
        idx++;
        // return nextElement;
        return {value: nextElement, done: false};

    }
    //return next;
    return {next}
 }

 const automaticFetcher = fetchNextElement([99,11,12,13,0,1,2,3,4]);
    // console.log(automaticFetcher()); // 99
    // console.log(automaticFetcher()); // 11
    // console.log(automaticFetcher()); // 12  
    // console.log(automaticFetcher()); // 13
    // console.log(automaticFetcher()); // 0
    // console.log(automaticFetcher()); // /1

    console.log(automaticFetcher.next()); // 99
    console.log(automaticFetcher.next()); // 11 
    console.log(automaticFetcher.next()); // 12
    console.log(automaticFetcher.next()); // 13
    console.log(automaticFetcher.next()); // 0
    console.log(automaticFetcher.next()); // 1
    console.log(automaticFetcher.next()); // 2
    console.log(automaticFetcher.next()); // 3
    console.log(automaticFetcher.next()); // 4
    console.log(automaticFetcher.next()); // { value: undefined, done: true }
    