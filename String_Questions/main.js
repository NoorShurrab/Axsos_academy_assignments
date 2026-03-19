console.log("1. Reverse a String");
function revString(str) {
    let result = "";
    for(let j = str.length-1; j >= 0; j--){
        result += str[j];
    }
    return result;
}
console.log(revString("hello"));
console.log(revString("Welcome"));

console.log("2. Count Vowels");
function findVowels(str){
    count = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === "a"|| str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++
        }
    }
    return count;
}
console.log(findVowels("hello"));
console.log(findVowels("tiger"));

console.log("3. Check Palindrome");
function isPlaindrome(str) {
        for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; 
        }
    }
    return true;
}
console.log(isPlaindrome("madam"));
console.log(isPlaindrome("nofon"));
console.log(isPlaindrome("yellow"));

console.log("4. Longest Word in a Sentence");
function longestWord(str) {
    let long = "";     
    let pointerInWord = ""; 
    let wholeSentence = str + " "; 
        for (let i = 0; i < wholeSentence.length; i++) {
        let char =  wholeSentence[i];

        if (char !== " ") {
            pointerInWord += char;
        } else {
            if (pointerInWord.length > long.length) {
                long = pointerInWord;
            }
            pointerInWord = "";
        }
    }
    return long;
}
console.log(longestWord("I love my unversity"));
console.log(longestWord("WonderFull name"));

console.log("5. Convert a Letter Grade to Feedback");
function enterLetter(lett){
    switch(lett) {
        case "A":
            console.log("Exellect");
            break;
        case "B":
            console.log("Goog job");
            break;
        case "C":
            console.log("Yoy Pass");
            break;
        case "D":
            console.log("Need improvement");
            break;
        case "F":
            console.log("Failed");
            break;
        default:
            console.log("Invalid Grade");
        
    }
}
enterLetter("A");
enterLetter("g");

console.log("6. Count Character Types in a String");
function computeCharacter (str){
    let computes = {
        vowels: 0,
        digits: 0,
        spaces: 0,
        others: 0 };
    for (let i = 0; i < str.length; i++){
        let letter = str[i];
    switch(letter) {
        case 'A': 
        case 'E': 
        case 'I': 
        case 'O': 
        case 'U':
        case 'a': 
        case 'e': 
        case 'i': 
        case 'o': 
        case 'u':
        computes.vowels++;
        break;

        case '0': 
        case '1': 
        case '2': 
        case '3': 
        case '4':
        case '5': 
        case '6': 
        case '7': 
        case '8': 
        case '9':
        computes.digits++;
        break;

        case " ":
        computes.spaces++;
        break;

        default:
            computes.others++;
            break;

    }
    }
    return computes;
}
console.log(computeCharacter("Hello everyone! I'm happy to be with you"));
console.log(computeCharacter("Welcome to 2345!@#"));