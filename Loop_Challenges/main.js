console.log("1. Display odd numbers");
for(let odd = 1; odd <= 20; odd++) {
    if(odd % 2 !== 0){
        console.log(odd);
    }
}

console.log("2. Decreasing multiple of 3");
let num = 100;
while(num >= 0){
    if(num % 3 === 0){
        console.log(num);
    }
    num--;
}

console.log("3. Print the given sequence");
for(let i = -3.5; i <= 4; i += 1.5){
    console.log(i);
}

console.log("4. Sigma");
let result = 0;
for(let sum = 1; sum <= 100; sum++){
    result += sum;
    console.log(result);
}

console.log("5. Factorial");
let product = 1;
for(let fac = 1; fac <= 12; fac++){
    product *= fac;
    console.log(product);
}