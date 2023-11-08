//Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). 

let mul=document.getElementById('mul');
mul.innerText='multiple';

mul.addEventListener('click',function() {
var num1 = document.getElementById("first-number").value;
var num2 = document.getElementById("second-number").value;

document.getElementById("answer").innerText = num1 * num2;

});

let div=document.getElementById('div');

div.innerText='divide';
div.addEventListener('click',function() {
let num1 = document.getElementById("first-number").value;
let num2 = document.getElementById("second-number").value;
document.getElementById("answer").innerText = num1 / num2;
});

let add=document.getElementById('add');

add.innerText='add';
add.addEventListener('click',function() {
let num1 = document.getElementById("first-number").value;
let num2 = document.getElementById("second-number").value;
document.getElementById("answer").innerHTML = +num1+ +num2;
});

let sub=document.getElementById('sub');

sub.innerText='sub';
sub.addEventListener('click',function() {
let num1 = document.getElementById("first-number").value;
let num2 = document.getElementById("second-number").value;
document.getElementById("answer").innerText = num1 - num2;
    
});


console.log('hello world');
console.error('hello world');