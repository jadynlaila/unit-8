let array = [];

let arrayLength = Math.floor(Math.random() * 20 + 10);

for(let i = 0; i < arrayLength; i++){
    let randy = Math.floor(Math.random() * 15);
    array.push(randy);
}

// 1,2,3,4,5,3,2,3,4,5,3,2,3,6,8,9,0
let arrayChecked = [];
for (i in array) {
    if(!arrayChecked.includes(array[i])){
        arrayChecked.push(array[i]);
    }else{
        arrayChecked.push("")
    }
    console.log('hi');
}
console.log(array);
console.log(arrayChecked);