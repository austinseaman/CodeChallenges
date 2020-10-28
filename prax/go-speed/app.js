let btn = document.getElementById("counter");
let newCount = document.getElementById("count");

let count = 0;

btn.addEventListener('click', function() {
    count++
    localStorage.setItem("count", count)
    newCount.textContent = count
})