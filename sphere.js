function roundToTwoDecimalPlaces(number) {
    // Use toFixed to round the number to 2 decimal places
    var roundedNumber = Number(number.toFixed(2));
    return roundedNumber;
}

const radius=document.getElementById("radius")
const submit=document.getElementById("submit")

var r=1
var pi=3.14159

const area=document.getElementById("area")
const volume=document.getElementById("volume")
const hemiarea=document.getElementById("hemiarea")
const hemivolume=document.getElementById("hemivolume")

submit.addEventListener('click', ()=>{
    console.log("clicked!")
    if(radius.value==""){
        r=1
    }
    else{
        r=radius.value
    }
    
    area.innerText="Surface area of sphere = "+roundToTwoDecimalPlaces(4*pi*r*r)
    volume.innerText="Volume of sphere = "+roundToTwoDecimalPlaces((4/3.0)*pi*r*r*r)
    hemiarea.innerText="Curved Surface Area of hemisphere = "+roundToTwoDecimalPlaces(2*pi*r*r)+" and total surface area of hemisphere = "+roundToTwoDecimalPlaces((3*pi*r*r))
    hemivolume.innerText="Volume of hemisphere = "+roundToTwoDecimalPlaces((2/3.0)*pi*r*r*r)

})