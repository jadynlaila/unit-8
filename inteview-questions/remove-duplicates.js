let array = [1,2,3,4,5,3,2,3,4,5,3,2,3,6,8,9,0];
let arrayChecked = [];
for (i in array) {
    for (j in arrayChecked) {
        if (array[i] == array[j]) {
            arrayChecked.push("");
        }else{
            arrayChecked.push(array[i]);
        }
    }
    console.log('hi')
}
console.log(array);