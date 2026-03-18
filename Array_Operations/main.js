console.log("1. Accessing Elements");
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]);
console.log(colors[4]);
console.log(colors[1]);

colors[2] = "orange";
console.log(colors);

console.log("2. Traversing an Array");
let numbers = [10, 20, 30, 40, 50]; 
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("reverse array")
for(let x = numbers.length-1; x >= 0; x--){
    console.log(numbers[x]);
}

console.log("3. Searching in Array");
let numbers2 = [5, 10, 15, 20, 25];
let not = -1 ;
// if (numbers2.includes(25)){
//     console.log("Found at position X");
// }else {
//     console.log("Not Found");
// }
for (let n = 0; n < numbers2.length; n++){
    if(numbers2[n] === 25){
        not = n;
        break;
}
}
if(not !== -1){
    console.log("Found at Position "+ not);
}else{
    console.log("not Found");
}




console.log("4. Sorting an Array");
let scores = [50, 20, 70, 10, 40];
console.log("Ascending Order");
scores.sort((a, b) => a - b); 
console.log(scores); 
console.log("Descending Order");
scores.sort((a, b) => b - a); 
console.log(scores); 
let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log(names);

console.log("5. Inserting Elements");
let animals = ["dog", "cat", "rabbit"];
animals.push("elephant");
console.log(animals);
animals.unshift("lion");
console.log(animals);
animals.splice(2, 0, "tiger");
console.log(animals);

console.log("6. Deleting Elements");
let fruits = ["apple", "banana", "cherry", "date"];
fruits.shift(); 
console.log(fruits);
fruits.pop(); 
console.log(fruits);
fruits.splice(fruits.indexOf("banana"), 1);
console.log(fruits);

console.log("7. Combining Array");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);

console.log("8. splitting an Array");
let items = ["a", "b", "c", "d", "e"];
let firstPart = items.slice(0, 3); 
let secondPart = items.slice(3);
console.log(firstPart);  
console.log(secondPart); 

console.log("9. Filtering Elements");
let numbers3 = [1, 5, 10, 15, 20, 25, 30];
let filteredNumbers = numbers3.filter(num => num > 15);
console.log(filteredNumbers); 

console.log("10. Advanced Challenge");
console.log("Remove Duplicates");
let nums = [1, 2, 2, 3, 4, 4, 5];
let removeNums = nums.filter((item, index) => {
    return nums.indexOf(item) === index;});
console.log(removeNums);

console.log("Rotate Array to the Right");
let arr = [1, 2, 3, 4, 5];
let n = 2;

for (let i = 0; i < n; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);   
}
console.log(arr); 

