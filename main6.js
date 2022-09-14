addEventListener("DOMContentLoaded",()=>{
    let km=0, min=0, vp=0
    km=Number(prompt("Ingrese los kilometros que rrecorrio el proyectil:"))
    min=Number(prompt("Ingrese los minutos:"))
    vp=(km/min)
    console.log(`La velocidad del proyectil es de:${vp}`)
})