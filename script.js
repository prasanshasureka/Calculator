// $("button").click(function() {
//     // var fired_button = $(this).val();
//     // alert(fired_button);
//     alert('Hey');
// });

var btn = document.getElementsByTagName('button');
var display = document.getElementById('result');

operators = ["+", "-", "*", "/"]
brace = []

function calcFunc(){
    var value = this.getAttribute('value')
    console.log(value);
    if (value == "="){
        display.innerText = eval(display.innerText);
    } else if (value == "clear"){
        display.innerText = '';
    } else if (value == "()"){
        if (operators.includes(display.innerText.slice(-1))){
            display.innerText += "("
            brace.push('(')
        } else {
            if (display.innerText.slice(-1) == "("){
                display.innerText += '0'
            }
            if (brace.slice(-1) == '(') {
                console.log('after 0')
                brace.pop()
                display.innerText += ")"
            } else {
                if (display.innerText == ""){
                    display.innerText += "("
                } else {
                    display.innerText += "*("
                }
                brace.push('(')
            }
        }
    } else {
        display.innerText += value;
    }
    
} 


for (var i=0; i<btn.length;i++){
    btn[i].addEventListener('click', calcFunc);
}




// window.addEventListener('DOMContentLoaded', init, false);

// function init(){
//     console.log('yay!')
// }

// window.addEventListener('DOMContentLoaded', init, false);

// function init(){
//     console.log('yay!')
// }

// document.onkeydown = function (e) {
//     keyPressed = String.fromCharCode(e.keyCode);        
//     if (keyPressed == '=' || e.keyCode == 13){
//         display.innerText = eval(display.innerText)
//     } else if (e.keyCode == 8 || e.keyCode == 18 || e.keyCode == 16 || e.keyCode == 17){
//         if (e.keyCode == 8){
//             display.innerText = display.innerText.slice(0,-1);
//         }
//     } else if (e.keyCode == 116) {
//         display.innerText = '';
//     } else if (keyPressed >= 57 && keyPressed <= 48){
//         display.innerText += keyPressed
//         console.log(display.innerText);
//     }
//     console.log(e.keyCode);
// };


document.onkeydown = function(event) {

    /* Numbers 0 - 9 */
    if (event.which == 48) {
        display.innerText += 0;
    }
    if (event.which == 49) {
        display.innerText += 1;
    }
    if (event.which == 50) {
        display.innerText += 2;
    }
    if (event.which == 51) {
        display.innerText += 3;
    }
    if (event.which == 52) {
        display.innerText += 4;
    }
    if (event.which == 53) {
        display.innerText += 5;
    }
    if (event.which == 54) {
        display.innerText += 6;
    }
    if (event.which == 55) {
        display.innerText += 7;
    }
    if (event.which == 56 && !event.shiftKey)     {
        display.innerText += 8;
    }
    if (event.which == 57) {
        display.innerText += 9;
    }
    /* Show result with enter */
    if (event.which == 13) {
        display.innerText = eval(display.innerText)
    }
    /* Backspace remove last entry */
    if (event.which == 8) {
        display.innerText = display.innerText.slice(0,-1);
    }
    /* Clear all with escape */
    if (event.which == 27) {
        display.innerText = "";
    }
};

document.onkeypress = function(event) {
    if (event.which == 43) {
        display.innerText += '+';
    }
    if (event.which == 45) {
        display.innerText += "-";
    }
    if (event.which == 42) {
        display.innerText += "*";
    }
    if (event.which == 47) {
        display.innerText += "/";
    }
    if (event.which == 46) {
        display.innerText += ".";
    }
};