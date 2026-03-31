console.log("1. Always Hungry");
function alwaysHungry(arr) {
    let food = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy");
            food = true; 
        } 
    }
    if(!food) {
        console.log("I'm hungry");
    }
}
alwaysHungry([3, "food", 5, "food", "food"]);
alwaysHungry([5, 7, 8, 10]);

console.log("2. High Pass Filter");
function highPass(arr, cutoff) {
    let filteredArr = [];
    let index = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr[index] = arr[i];
            index++;
        }
    }

    return filteredArr
}
console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));

console.log("3. Better than average");
function betterThanAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > average) {
            count++;
        }
    }
    return count;
}
console.log(betterThanAverage([6, 8, 6 , 5, 5, 9]));

console.log("4. Array Reverse");
function reverse(arr) {
    let reverseArr = [];
    let index = 0;
    for(let i = arr.length -1; i >= 0; i--) {
        reverseArr[index] = arr[i];
        index++;
    }
    return reverseArr;
}
console.log(reverse(["a", "b", "c", "d", "e"]));

console.log("5. Fibonacci Array");
function fibonacciArray(n) {
    let fibArr = [0, 1];
    for(let i = 2; i < n; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}
console.log(fibonacciArray(10));