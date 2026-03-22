console.log("1. Remove Blanks");
function removeBlanks(str) {
    let result = "";
    for(let i = 0; i < str.length; i++) {
        if ( str[i] === " ") {
            continue; 
        }else {
            result += str[i];
        }
    }
    return result;
}
console.log(removeBlanks("Hello everyone   !"));

console.log("2. Get Digits");
function getDigits(str) {
    let digits = "";
    for(let j = 0; j < str.length; j++){
        if(isNaN(str[j])){
            continue;
        }else {
            digits += str[j];

        }
    }
    return Number(digits);
}
console.log(getDigits("Hello2345"));

console.log("3. Acronyms");
function acronyms(str) {
    let acronym = "";
    let part = str.split(" ");
    for(let n = 0; n < part.length; n++){
            acronym += part[n][0];
    }
    return acronym.toUpperCase() ;
}
console.log(acronyms("hello everyone to my world"));

console.log("4. Count Non Spaces");
function countNonSpaces(str) {
    let counts = 0;
    for(let m = 0; m < str.length; m++){
        if(str[m] === " "){
            continue
        } else {
            counts++;
        }
    }
        return counts;
}
console.log(countNonSpaces("Break the ice"));

console.log("5. Remove Shorter Strings");
function removeShorterStrings(arr, minLength) {
    let arra = [];
    let index = 0;
    for(let b = 0;  b < arr.length; b++){
        if(arr[b].length < minLength){
            continue;
        }
        else {
            arra[index] = arr[b];
            index++;
        }
    }
    return arra;
}
console.log(removeShorterStrings(["google", "the", "gmail", "facebook"], 4));