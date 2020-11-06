let btn = document.getElementById("counter");
let newCount = document.getElementById("count");

let count = 0;

function clickCount(){
    count++
    localStorage.setItem("count", count)
    newCount.textContent = count
}

function stopCounting(){
    btn.removeEventListener('click', clickCount)
}

btn.addEventListener('click', clickCount)

setTimeout(stopCounting, 10000)