addEventListener("DOMContentLoaded",()=>{
    let valor=0,pi=3.14,r=0,h=0
    valor=Number(prompt("Ingresa el primer valor:"));
    r=Number(prompt("Ingrese el rqdio del cilindro:"));
    h=Number(prompt("Ingrese la altura:"))
    let area=0,volumen=0
    area=(valor*Math.PI*Math.pow(r,2))+((valor*pi*r)*h)
    volumen=((pi*r**2)*h)

    console.log(`el area del cilindro es de:${area}`)
    console.log(`el volumen del cilindro es de: ${volumen}`)
})