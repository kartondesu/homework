function verify () {
    let X = parseFloat(elementX.value);
    let Y = parseFloat(elementY.value);
    let Z = null;
    console.log(X,Y)

    let low, high;
    if (X > Y) {
        low = Y;
        high = X;
        Z = (X*Y);
        result = Z;
        document.getElementById("result").innerText = messageText + ' ' + result;
        document.getElementById("result").value = result;
        //check = true;
    }
    else if (Y >= X){
        
        // low = X;
        // high = Y;
        Z = (Math.log(X + Y));
        result = Z;
        document.getElementById("result").innerText = messageText + ' ' + result;
        document.getElementById("result").value = result;
    }
    else {
        document.getElementById("result").innerText = messageText + ' ' + 'Введите число!';
        document.getElementById("result").value = result;
    }
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
//let check = false;


const elementX = document.getElementById("X");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("Y");
elementY.addEventListener('keyup', verify);

const elementResult = document.getElementById("result");
elementResult.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);


// function send() {
//         let textCondition = document.getElementsByTagName('p')[0].innerText
//         document.getElementsByName('formulation')[0].value = textCondition;
//         document.getElementsByName('result')[0].value = result;
//         document.getElementById("UserEnter").submit();
// }

// function verify_send() {
//     verify();
// }