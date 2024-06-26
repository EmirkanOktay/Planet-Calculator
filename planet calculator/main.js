let input = document.querySelector("#input");
let button = document.querySelector("#button");
let venus = document.querySelector("#venus")

input.style.width = "230px"
input.style.height = "35px"
input.style.marginRight = "105px"

button.style.width = "150px"
button.style.height = "50px"
button.style.color = "white"
button.style.backgroundColor = "blue";
button.style.borderRadius = "5px"
button.style.borderColor = "blue"; 
button.style.fontSize = "20px"


button.addEventListener("mouseenter", e=> {
    button.style.color = "black";
})
button.addEventListener("mouseleave", e=> {
    button.style.color ="white"
})

button.addEventListener("click",e => {

   let weight = input.value
   let moonGravity = 1.62
   let earthGravity = 9.81;
   let mercuryGravity = 3.70
   let marsGravity = 3.71
   let venusGravity = 8.87
   let jupiterGravity = 24.79
   let saturnGravity = 10.44
   let uranusGravity = 8.69
   let neptuneGravity = 11.15
   let plutonGravity = 0.62

let mercuryWeight =Math.round( weight * (mercuryGravity / earthGravity))
let moonWeight = Math.round(weight*(moonGravity / earthGravity))
let marsWeight =Math.round( weight * (marsGravity / earthGravity))
let venusWeight = Math.round (weight * (venusGravity / earthGravity))
let jupiterWeight = Math.round (weight * (jupiterGravity / earthGravity))
let saturnWeight = Math.round(weight * (saturnGravity / earthGravity))
let uranusWeight = Math.round(weight * (uranusGravity / earthGravity))
let neptuneWeight = Math.round(weight *(neptuneGravity / earthGravity))
let plutonWeight = Math.round(weight * (plutonGravity / earthGravity))

document.querySelector("#mercury").innerHTML = "";
document.querySelector("#moon").innerHTML = "";
document.querySelector("#mars").innerHTML = "";
document.querySelector("#saturn").innerHTML = "";
document.querySelector("#venus").innerHTML = "";
document.querySelector("#jupiter").innerHTML = "";
document.querySelector("#uranus").innerHTML = "";
document.querySelector("#neptune").innerHTML = "";
document.querySelector("#pluto").innerHTML = "";

let writeWeightMER;

writeWeightMER= document.createElement("p")
writeWeightMER.style.fontSize = "25px"
writeWeightMER  .style.paddingLeft = "250px"
writeWeightMER.style.width = "5px"


writeWeightMER.innerHTML = mercuryWeight
document.querySelector("#mercury").appendChild(writeWeightMER);


let writeWeightMOO;

writeWeightMOO= document.createElement("p")
writeWeightMOO.style.fontSize = "25px"
writeWeightMOO.style.paddingLeft = "250px"


writeWeightMOO.innerHTML = moonWeight
document.querySelector("#moon").appendChild(writeWeightMOO);


let writeWeightMAR;

writeWeightMAR= document.createElement("p")
writeWeightMAR.style.fontSize = "25px"
writeWeightMAR  .style.paddingLeft = "250px"


writeWeightMAR.innerHTML = marsWeight
document.querySelector("#mars").appendChild(writeWeightMAR);


let writeWeightS;

writeWeightS= document.createElement("p")
writeWeightS.style.fontSize = "25px"
writeWeightS.style.paddingLeft = "250px"


writeWeightS.innerHTML = saturnWeight
document.querySelector("#saturn").appendChild(writeWeightS);


let writeWeightV;

writeWeightV = document.createElement("p")
writeWeightV.style.fontSize = "25px"
writeWeightV.style.paddingLeft = "250px"


writeWeightV.innerHTML = venusWeight
document.querySelector("#venus").appendChild(writeWeightV);

let writeWeightJ;

 writeWeightJ = document.createElement("p")
writeWeightJ.style.fontSize = "25px"
writeWeightJ.style.paddingLeft = "250px"


writeWeightJ.innerHTML = jupiterWeight
document.querySelector("#jupiter").appendChild(writeWeightJ);

let writeWeightU;

 writeWeightU = document.createElement("p")
writeWeightU.style.fontSize = "25px"
writeWeightU.style.paddingLeft = "250px"
    

writeWeightU.innerHTML = uranusWeight
document.querySelector("#uranus").appendChild(writeWeightU);

let writeWeightN;

 writeWeightN = document.createElement("p")
writeWeightN.style.fontSize = "25px"
writeWeightN.style.paddingLeft = "250px"
    

writeWeightN.innerHTML = neptuneWeight
document.querySelector("#neptune").appendChild(writeWeightN);


let writeWeightP;

writeWeightP= document.createElement("p")
writeWeightP.style.fontSize = "25px"
writeWeightP.style.paddingLeft = "250px"


writeWeightP.innerHTML = plutonWeight
document.querySelector("#pluto").appendChild(writeWeightP);


})