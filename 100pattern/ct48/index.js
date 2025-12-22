// html
<button id ="myBtn">Click me</button>

//js
const myBtn = document.getElementById("myBtn");
function handleClick() {
    alert("hello");
}
myBtn.addEventListener("click", handleClick, {
    once: true,
});