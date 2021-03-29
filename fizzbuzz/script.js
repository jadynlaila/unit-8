
let input = [];
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
        input.push('FizzBuzz');
    }
    else if(i % 3 == 0 ){
        input.push('Fizz');
    }else if(i % 5 == 0){
        input.push('Buzz');
    }else{
        input.push(i);
    }
    
}
input = input.join(", ");
console.log(input);