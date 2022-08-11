let stopCount = true;

function welcomeUser() {
    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const welcomeElemet = document.getElementById("welcome");
    welcomeElemet.innerText = "Welcome " + firstName + " " + lastName;
    welcomeElemet.style.border = "1px solid red";
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; inputs.length; i++) {
        inputs[i].value = "";
    }

}
// ----1 OPTION-----

// function hideInputSection() {
//     const inputSec = document.getElementById("inputsection");
//     inputSec.hidden = true;
// }
// function displayInputSection() {
//     const inputSec = document.getElementById("inputsection");
//     inputSec.hidden = false;
// }

// function changeColor() {
//     document.body.style.color = "red";
//}
// ----1 OPTION ENDS-----

// ----2 OPTION-----


function hideDisplayInputSection(hidden) {
    const inputSec = document.getElementById("inputsection");
    inputSec.hidden = hidden;
}
// ----2 OPTION ENDS-----

function changeColor() {
    document.body.style.color = "red";
}

function timer() {
    stopCount = false;
    setCounterElement(10);
}

function stopCounter() {
    stopCount = true;
}

function setCounterElement(i) {
    if (i < 0 || stopCount) {
        return;
    } else {
        document.getElementById("count").innerText = i;
        setTimeout(setCounterElement, 1000, i - 1)
    }
}

// 5! = 5 * 4 * 3 * 2 * 1
function calculateFactorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

function setFactorial() {
    const value = Number(document.getElementById("factorialN").value);
    const factResult = calculateFactorial(value);
    document.getElementById("factorialValue").innerText = factResult;
}