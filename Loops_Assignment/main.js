console.log("1. Print Numbers");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("2. Reverse Counting");
for(let x = 10; x >= 1; x--) {
    console.log(x);
}

console.log("3. Even Numbers");
for(let even = 1; even <= 20; even++) {
    if(even % 2 === 0){
        console.log(even);
    }
}

console.log("4. Odd Numbers");
for (let odd = 1; odd <= 20; odd++) {
    if(odd % 2 !== 0){
        console.log(odd);
    }
}

console.log("5. Sum of Numbers");
let result = 0;
for(let sum = 1; sum <= 10; sum++){
    result += sum;
    console.log(result);
}

console.log("6. FizzBuzz");
for(let game = 1; game <= 30; game++){
    if(game % 3 === 0 && game % 5 === 0){
        console.log(`"FizzBuzz"`);
    }else if(game % 3 === 0){
        console.log(`"Fizz"`);
    }else if(game % 5 === 0){
        console.log(`"Buzz"`);
    }
}