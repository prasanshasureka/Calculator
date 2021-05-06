// $("button").click(function() {
//     // var fired_button = $(this).val();
//     // alert(fired_button);
//     alert('Hey');
// });

var btn = document.getElementsByTagName('button');
var display = document.getElementById('result');
var op1;
var op2;
var operator;
console.log(btn);
function calcFunc(){
    var value = this.getAttribute('value')
    // console.log(value);
    if (value == '+'){
        operator = '+';
        op1 = display.innerText;
        display.innerText = '';
    } else if(value == '-'){
        operator = '-';
        op1 = display.innerText;
        display.innerText = '';
    } else if(value == '*'){
        operator = '*';
        op1 = display.innerText;
        display.innerText = '';
    } else if(value == '/'){
        operator = '/';
        op1 = display.innerText;
        display.innerText = '';
    } else if(value == '='){
        op2 = display.innerText;
        display.innerText = eval(op1 + operator + op2);
    } else if(value == 'clear'){
        display.innerText = '';
    } else if(value == '+/-'){
        console.log(display.innerText);
        if (parseFloat(display.innerText) > 0){
            display.innerText = "-"+display.innerText;
        } else {
            display.innerText = display.innerText.slice(1);
        }
    } else if(value == '%'){
        display.innerText = display.innerText/100;
    } else {
        display.innerText += value;
    }
}
for (var i=0; i<btn.length;i++){
    btn[i].addEventListener('click', calcFunc);
}



// var resultArea = document.getElementById('answer-area');
// resultArea.addEventListener('keydown', function(event){
//     console.log("key press",event.keyCode);
// });