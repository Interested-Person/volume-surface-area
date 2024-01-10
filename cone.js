function roundToTwoDecimalPlaces(number) {
    // Use toFixed to round the number to 2 decimal places
    var roundedNumber = Number(number.toFixed(2));
    return roundedNumber;
}

const radius=document.getElementById("Radius")
const height=document.getElementById("Height")
const submit=document.getElementById("submit")

var r=1;
var h=1;
var pi=3.14159;

const volume=document.getElementById("volume")
const tsa=document.getElementById("tsa")
const csa=document.getElementById("csa")

submit.addEventListener('click', ()=>{
    if(radius.value==""){
        r=1;
        console.log("radius field empty, defaulted to 1")
    }
    else{
        r=radius.value
    }
    if(height.value==""){
        h=1;
        console.log("height field empty, defaulted to 1")
    }
    else{
        h=height.value
    }
    
    
    volume.innerText="Volume = "+roundToTwoDecimalPlaces((pi*r*r*h)/3.0)
    csa.innerText="Curved Surface Area = "+roundToTwoDecimalPlaces(pi*r*(Math.sqrt(h*h+r*r)))
    tsa.innerText="Total Surface Area = "+roundToTwoDecimalPlaces((pi*r*r)+(pi*r*(Math.sqrt(h*h+r*r))))
})
