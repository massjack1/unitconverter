/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convertBtn")
let input = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = input.value
    
    length.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet`
    volume.textContent = `${baseValue} volume = ${(baseValue * literToGallon).toFixed(2)} gallons`
    mass.textContent = `${baseValue} mass = ${(baseValue * kiloToPound).toFixed(2)} pounds`
})

