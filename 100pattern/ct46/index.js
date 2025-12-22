// bad 
// <button onclick="alert('hello')">Click me</button>
// good
<button id ="myBtn">Click me</button>

//js
document.getElementById("myBtn").addEventListener("click", () => {
    alert("hello")
})