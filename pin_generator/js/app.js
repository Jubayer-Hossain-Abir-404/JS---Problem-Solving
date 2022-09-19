function getPin() {
    const randNum = Math.round(Math.random() * 10000);
    if ((randNum + "").length == 4) {
        return randNum;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById("displayPin").value = pin;
}

document
    .getElementById("calcInput")
    .addEventListener("click", function (event) {
        const newNumber = event.target.innerText;
        const prevNumber = document.getElementById("inputNum");
        // console.log(prevNumber + " " + newNumber);
        if (isNaN(newNumber)) {
            if (newNumber == "C") {
                prevNumber.value = "";
            } else if (newNumber == "<") {
                prevNumber.value = prevNumber.value.substring(
                    0,
                    prevNumber.value.length - 1
                );
            }
        } else {
            prevNumber.value = prevNumber.value + newNumber;
        }
        // console.log(prevNumber);
    });
let count = 0;
function verifyPin() {
    // debugger;
    const input = document.getElementById("inputNum").value;
    const generatedPin = document.getElementById("displayPin").value;

    // console.log(input + " " + generatedPin);

    const falseNotify = document.getElementById("falseNotify");
    const trueNotify = document.getElementById("trueNotify");
    const warningMessage = document.getElementById("warningMessage");

    if (input == generatedPin) {
        trueNotify.style.display = "block";
        falseNotify.style.display = "none";
        warningMessage.style.display = "none";
        count=0;
    } else {
        count++;
        if (count > 3) {
            document.getElementById("inputNum").value = "";
            document.getElementById("displayPin").value = "";
            trueNotify.style.display = "none";
            falseNotify.style.display = "none";
            warningMessage.style.display = "none";
            count = 0;
        } else {
            trueNotify.style.display = "none";
            falseNotify.style.display = "block";
            warningMessage.style.display = "block";
            const countDown = 4 - count;
            warningMessage.innerText = countDown + " try left";
        }
    }
}
