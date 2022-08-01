let x = prompt('Give me the first value:');
console.log('The fist value is ' + x);

let y = prompt('Give me the second value:');
console.log('The second value is ' + y);

let operator = prompt('Please choose what You would like to do: ADDITION (press " + ") or SUBSTRACTION (press " - ") or MULTIPLICATION (press " * ") or DIVISION (press " / ")')


if ((operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') ) {
    console.log('You have choosen incorrect operator! Please take on of these : + - * / ')
    alert("You have choosen incorrect operator! Please take on of these : + - * / ");
}else{ 
    if (!isNaN(x) && !isNaN(y)) {    
        if (operator == '+') {
            let result1= Number.parseInt(x) + Number.parseInt(y);
            console.log('The result of addition is ' + result1);
            alert('The result of addition is ' + result1)
        } else if (operator == '-'){
            let result2= x - y;
            console.log('The result of substraction is ' + result2); 
            alert('The result of substraction is ' + result2);
        } else if (operator == '*'){
            let result3= x * y;
            console.log('The result of multiplication is ' + result3); 
            alert('The result of multiplication is ' + result3)
        } else {(operator == '/')
            let result4= x / y;
            console.log('The result of division is ' + result4); 
            alert('The result of division is ' + result4);
        } 
    }
    else {
        if (operator == '+') {
            let result1= x + y;
            console.log('The result of addition is string type value ' + result1);
            alert('The result of addition is string type value ' + result1);
        } else {
            console.log('Sorry but You can not use -, *, / for operations with string type values');
            alert('Sorry but You can not use -, *, / for operations with string type values')
            }
        }        
    };
        
