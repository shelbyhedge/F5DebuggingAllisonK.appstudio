// if the first number is largest, displays the sum of the two numbers      
// if second number is largest, displays product of the two numbers
// if the two numbers are equal then shows the first number squared


/*
if (n1 > n2) 
    console.log("The sum of the numbers is " + sum(n1 + n2)
else
    console.log("The product of the numbers is " + n1 x n2)
*/

let n1 = prompt("Enter first number")
let n2 = prompt("Enter second number")

if (n1 > n2) {
    console.log("The sum of the numbers is ' + (n1 + n2));
} else if (n1 < n2) {
    console.log("The product of the numbers is ' + (n1 * n2));
  } else if (n1 === n2) {
    console.log("The squared of the numbers is ' + (n1 ** 2));
  } 

