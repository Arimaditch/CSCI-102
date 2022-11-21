// output info

// document.write("hello everyone");

// window.alert("click on ok to continue");

// prompt("Enter Your Name")

// parseInt(prompt("Enter Your Age"))

// console.log('login console')

// variables - storage location, 
// define - var (oldest)(global), let(local), const(constant - pie,greavity,speed of light), 

// var variableName = "This is a valueVariable name cannot start w number, or space, or hiphen. second word gets uppercase";

var variableName = "This is a value"
let name = "Jacob";
const score = 20 ;

// document.write(variableName)
document.write(name);
// methods and properties 

let result = name.toUpperCase();
document.write(result);

let date = Date();
document.write(date);

// property
document.write("<br>")
document.write(name.length);

// DOM 

// let userColor = prompt("Enter your Favorite color");
// document.body.style.backgroundColor = userColor;

// let para = document.querySelector('.hero');

// Data Types - integer, string, boolean, arrays, undefined, NaN, object, 

let a = 30; //integer
let b = "this is text"; //string
let c = true; //boolean
let d = ['student1','student2', 'students 3']; //array
let person = {
    name: 'Justice',
    age: 20,
    website: 'justicebanson.com',
    image: 'images/1.jpg'
}

// alert('hello world')

// function - block of reusable code that is acalled when needed.

// function functionName(parameter){
//     run code here
// }

function doSomething(){
    alert("hello world")
}

// call the function



//Event - actions or activities that the user or browser can react to.

// oncluck(), ondblclick(), onmouseenter(), onmouseleave()

// Conditionals - if, 

// if(false){
//     alert('this is true')
// }

// else if (false){
//     alert("this is the new truth")
// }

// else{
//     alert("this is the final truth");
// }


// arithmetic operators - /, *, +, -, 
// comparison operators - == or ===, =>, =<, >, <, !==, 
let password = 13;

if(password > 12){
    alert("Password is very Strong");
}
else if (password == 12){
    alert("Password is fairly stong");
}
else{
    alert("password is weak");
}

