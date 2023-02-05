/*Csajbók-Reményi László SZOFT-1/2/E 2023.02.05. */

const r1=document.querySelector("#r1");
const r2=document.querySelector("#r2");
const h=document.querySelector("#h");
const eredmeny=document.querySelector("#eredmeny");
const calcButton=document.querySelector("#calc");
const pi = Math.PI;

calcButton.addEventListener("click", () => {
    console.log(pi);
    let r1Radius=Number(r1.value);
    let r2Radius=Number(r2.value);
    let height=Number(h.value);
    let volume=calcVolume(r1Radius, r2Radius, height);
    eredmeny.value=volume.toFixed(3);
});

function calcVolume(r1, r2, h){
    let volume = (1/3)*pi*r1*r2*h;
    return volume;

}

