let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// 1. Sort the numbers in descending order (10, 9, 8, 7, etc).
// let sorted = integers.sort(function (a, b) {return b-a});
// console.log(sorted);

// 2. Remove any integers greater than 19.
// let filtered = integers.filter(function(n) {return n <= 19});
// console.log(filtered);

// 3. Multiply each remaining number by 1.5 and then subtract 1.
// let multiplied = integers.map(function(n) {return (n * 1.5) - 1});
// console.log(multiplied);

// 4. Then output (either in the DOM or the console) the sum of all the resulting numbers.



let newIntegers = integers.sort(function(a, b) {return b-a}).filter(function(n) {return n <= 19}).map(function(n) {return (n * 1.5) - 1}).reduce(function (a, b) {return a + b});

console.log(newIntegers);