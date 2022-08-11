function result(operator) {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const result = document.getElementById("result");
    result.innerHTML = "=" ;

    if (!isNaN(value1) && !isNaN(value2)) {
        if (operator == '+') {
            let res = Number(value1) + Number(value2);
            console.log('The result of addition is ' + res);
        } else if (operator == '-') {
            let res = Number(value1) - Number(value2);
            console.log('The result of substraction is ' + res);
        } else if (operator == '*') {
            let res = Number(value1) * Number(value2);
            console.log('The result of multiplication is ' + res);
        } else {
            (operator == '/')
            let res = Number(value1) / Number(value2);
            console.log('The result of division is ' + res);
        }
    }
    else {
        if (operator == '+') {
            let res = value1 + value2;
            console.log('The result of addition is string type value ' + res);
        }
    }
    return result.innerHTML = "="  ;
}