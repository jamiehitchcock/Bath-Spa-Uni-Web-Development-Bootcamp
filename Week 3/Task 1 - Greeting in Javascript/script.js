function greetName() {
    name = prompt('Enter your name');
    alert("Hello " + name.charAt(0).toUpperCase() + name.slice(1) + "!");
    };
greetName();