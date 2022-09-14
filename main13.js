addEventListener("DOMContentLoaded",()=>{
    let d=Number(prompt(`coloque el valor de la velocidad:`))
    let t=Number(prompt(`coloque las horas :`))
    let vxm=((d*1000)/(t*3600))
    let kxh=d
    console.log(`los metros por segundos:${vxm}`);
    console.log(`los kilometros por hora:${kxh}`);
})