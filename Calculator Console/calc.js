console.log("For addition write sum(num1,num2)");
console.log("For subtraction write sub(num1,num2)");
console.log("For multiplication write multi(num1,num2)");
console.log("For division write div(num1,num2)");

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function div(num1, num2) {
  if (num2 == 0) {
    return "Undefined";
  } else {
    return num1 / num2;
  }
}
function multi(num1, num2) {
  return num1 * num2;
}
