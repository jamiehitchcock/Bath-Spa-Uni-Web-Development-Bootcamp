//function to greet user
function greetName() {
    let name = prompt('Enter your name');
    alert("Hello " + name.charAt(0).toUpperCase() + name.slice(1) + "!");
    };
greetName();

let a = 3;
let b = 8;
console.log(`A = ${a}, B = ${b}`);
//Destructuring in ES6 to swap variables.
[a, b] = [b, a];
console.log(`A = ${a}, B = ${b}`);