let lbsInput= document.getElementById("lbsInput");
let grams = document.getElementById('gramsOutput')
let kiloGrams = document.getElementById('kgOutput')
let ounces = document.getElementById('ozOutput')


lbsInput.addEventListener('keyup', lbsValue)

function lbsValue(e){
    // console.log(123)
    let pounds = e.target.value
    // console.log(pounds)
    grams.textContent= pounds/0.0022046
    kiloGrams.textContent=pounds/2.2046
    ounces.textContent=pounds*16

}