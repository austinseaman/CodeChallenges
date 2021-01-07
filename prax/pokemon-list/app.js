const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const jsonData = xhr.responseText
        const pokeData = JSON.parse(jsonData)
        displayPokes(pokeData.objects[0].pokemon)
    }
}

function displayPokes(arr) {
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)

        const p = document.createElement('p')
        p.textContent = arr[i].resource_uri
        p.style.fontSize = '9px'
        h1.appendChild(p)
        // console.log(arr[i].name)
    }
}