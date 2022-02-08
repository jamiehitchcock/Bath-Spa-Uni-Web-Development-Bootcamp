const btn = document.querySelector("#btn");
const rgb = document.querySelector("#rgb");

function randomBackground(){
   let a = Math.floor(Math.random() * 255);
   let b = Math.floor(Math.random() * 255);
   let c = Math.floor(Math.random() * 255);
   let backgroundNumber = `rgb(${a}, ${b}, ${c})`;
   document.body.style.backgroundColor = backgroundNumber;
   rgb.innerHTML = backgroundNumber;
}

btn.addEventListener("click", (e) => {
    randomBackground();
});
