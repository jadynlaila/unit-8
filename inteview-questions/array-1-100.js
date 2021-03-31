let array = [];
let missingArray = [];
let randy = Math.floor(Math.random() * 100);
let arraySize = 100;
for (let i = 1; i < arraySize; i++) {
    array.push(i);
    if (i != randy) {
        missingArray.push(i);
    }
}
console.log(array);
console.log(missingArray);


for (j in missingArray) {
    if(missingArray[j] != array[j]){
        console.log(`this array is missing ${array[j]}`);
        break;
    }
}
