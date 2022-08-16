function result(operator) {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const result = document.getElementById("result");
    const error = "The values provided should be the numbers";

    if (!isNaN(value1) && !isNaN(value2)) {
        if (operator == '+') {
            result.innerHTML = Number(value1) + Number(value2);
            console.log('The result of addition is ' + res);
        } else if (operator == '-') {
            result.innerHTML = Number(value1) - Number(value2);
            console.log('The result of substraction is ' + res);
        } else if (operator == '*') {
            result.innerHTML = Number(value1) * Number(value2);
            console.log('The result of multiplication is ' + res);
        } else {
            (operator == '/')
            result.innerHTML = Number(value1) / Number(value2);
            console.log('The result of division is ' + res);
        }
    }
    else {
        if (operator == '+') {
            result.innerHTML = value1 + value2;
            console.log('The result of addition is string type value ' + res)
        }
        else {
            result.innerHTML = error;
        }
    }
}