function roundToTwoDecimalPlaces(number) {
    // Use toFixed to round the number to 2 decimal places
    var roundedNumber = Number(number.toFixed(2));
    return roundedNumber;
}

const radius=document.getElementById("radius")
const height=document.getElementById("height")
const submit=document.getElementById("submit")

const volume=document.getElementById("volume")
const csa=document.getElementById("csa")
const tsa=document.getElementById("tsa")

var r=1
var h=1
var pi=3.14159

submit.addEventListener('click', ()=>{
    console.log("clicked")
    if(radius.value==""){
        r=1
    }
    else{
        r=radius.value
    }
    if(height.value==""){
        h=1
    }
    else{
        h=height.value
    }

    volume.innerText="Volume = "+ roundToTwoDecimalPlaces(pi*r*r*h)
    csa.innerText="Curved surface area = "+roundToTwoDecimalPlaces(2*pi*r*h)
    tsa.innerText="Total surface area = "+roundToTwoDecimalPlaces((2*pi*r*h)+(2*pi*r*r))
})

