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
        Z = Math.round(Z * 100000) / 100000;
        result = Z;
        document.getElementById("Z").value = Z;
        document.getElementById("result").innerText = messageText + ' ' + result;
        document.getElementById("result").value = result;
 
    }
    else if (Y >= X){
     
        Z = (Math.log(X + Y));
        Z = Math.round(Z * 100000) / 100000;
        result = Z;
        document.getElementById("Z").value = Z;
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


const elementX = document.getElementById("X");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("Y");
elementY.addEventListener('keyup', verify);

const elementResult = document.getElementById("result");
elementResult.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);


