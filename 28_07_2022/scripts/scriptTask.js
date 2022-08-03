let x = prompt('Give me the first value:');
console.log('The fist value is ' + x);

let y = prompt('Give me the second value:');
console.log('The second value is ' + y);

let operator = prompt('Please choose what You would like to do: ADDITION (press " + ") or SUBSTRACTION (press " - ") or MULTIPLICATION (press " * ") or DIVISION (press " / ")');
console.log('The operator is ' + operator);

let result;
if ((operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') ) {
    console.log('You have choosen incorrect operator! Please take on of these : + - * / ')
    alert("You have choosen incorrect operator! Please take on of these : + - * / ");
}else{ 
    if (!isNaN(x) && !isNaN(y)) {    
        if (operator == '+') {
            let result= Number(x) + Number(y);
            console.log('The result of addition is ' + result);
            alert('The result of addition is ' + result)
        } else if (operator == '-'){
            let result= Number(x) - Number(y);
            console.log('The result of substraction is ' + result); 
            alert('The result of substraction is ' + result);
        } else if (operator == '*'){
            let result= Number(x) * Number(y);
            console.log('The result of multiplication is ' + result); 
            alert('The result of multiplication is ' + result)
        } else {(operator == '/')
            let result= Number(x) / Number(y);
            console.log('The result of division is ' + result); 
            alert('The result of division is ' + result);
        } 
    }
    else {
        if (operator == '+') {
            let result= x + y;
            console.log('The result of addition is string type value ' + result);
            alert('The result of addition is string type value ' + result);
        } else {
            console.log('Sorry but You can not use -, *, / for operations with string type values');
            alert('Sorry but You can not use -, *, / for operations with string type values')
            }
        }        
    };
        
