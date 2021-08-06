const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();




console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//tiny array
perf.start();
getSizedArray(tinyArray);
let resultsTiny = perf.stop();

perf.start();
getSizedArray(smallArray);
let resultsSmall = perf.stop();

perf.start();
getSizedArray(mediumArray);
let resultsMedium= perf.stop();

perf.start();
getSizedArray(largeArray);
let resultsLarge= perf.stop();

perf.start();
getSizedArray(extraLargeArray);
let resultsExtraLarge= perf.stop();

console.log("array results");
console.log("tiny", resultsTiny.preciseWords);
console.log("snall", resultsSmall.preciseWords);
console.log("medium", resultsMedium.preciseWords);
console.log("large", resultsLarge.preciseWords);
console.log("extralarge", resultsExtraLarge.preciseWords);

//
// console.log('Results for tiny array');
// console.log(tinyArray);
// console.log('results for small array');
// console.log(smallArray);
// console.log('results for medium array');
// console.log(mediumArray);
// console.log('results for large array');
// console.log(largeArray);
// console.log('result for extra large array')
// console.log(extraLargeArray);
