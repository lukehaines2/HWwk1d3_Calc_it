
var num1 = prompt('Choose a number');
console.log('num1', num1)

var op = prompt('choose (p)lus + , (m)inus - , (d)ivide / , or (t)imes * ');
console.log('op', op)

// if ( op != 'sqrt') {
var num2 = prompt('Choose another number');
console.log('num2', num2)

// if num op isnt sqrt then run 

alert("Why is your console not open?")

var parseInt1 = parseInt(num1);
var parseInt2 = parseInt(num2);

// MY CODE
if (op == '+' || op == 'p') {
  console.log(parseInt1)
  console.log(parseInt2)
  var result = (parseInt1 + parseInt2);
  alert("Your result is : " + result);

} else if(op == '-' || op == 'm') {
  console.log(parseInt1)
  console.log(parseInt2)
  var result = (parseInt1 - parseInt2);
  alert("Your result is : " + result);

} else if(op == "/" || op == 'd') {
  console.log(parseInt1)
  console.log(parseInt2)
  var result = (parseInt1 / parseInt2);
  alert("Your result is : " + result);

} else if(op == '*' || op == 't') {
  console.log(parseInt1)
  console.log(parseInt2)
  var result = (parseInt1 * parseInt2)
  alert("Your result is : " + result);

} else {
    var op = prompt("Invalid input, please enter correct command");
}


  
