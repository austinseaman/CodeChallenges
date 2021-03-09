const box = document.getElementById('box')

box.addEventListener("mouseenter", function(){
    box.style.backgroundColor = "blue"
})
box.addEventListener("mouseleave", function(){
    box.style.backgroundColor = "black"
})
box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})
box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})
box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})
window.addEventListener("scroll", function(){
    box.style.backgroundColor = "orange"
})

window.addEventListener("keydown", colorChange)

function colorChange() {
    
    if(event.which === 82){
        box.style.background = "red"
    } else if (event.which === 66) {
        box.style.background = "blue"
    } else if (event.which === 89) {
        box.style.background = "yellow"
    } else if (event.which === 71) {
        box.style.background = "green"
    } else if (event.which === 79) {
        box.style.background = "orange"
    }
}
// addEventListener("keydown", function(){
//     if(event.which === 82) {
//     box.style.backgroundColor = "red"
//     }
// })
// addEventListener("keydown", function(){
//     console.log(box.style.background)
//     if(event.which === 66) {
//     box.style.backgroundColor = "blue"
//     }
// })
// addEventListener("keydown", function(){
//     if(event.which === 89) {
//     box.style.backgroundColor = "yellow"
//     }
// })
// addEventListener("keydown", function(){
//     if(event.which === 71) {
//     box.style.backgroundColor = "green"
//     }
// })
// addEventListener("keydown", function(){
//     if(event.which === 79) {
//     box.style.backgroundColor = "orange"
//     }
// })