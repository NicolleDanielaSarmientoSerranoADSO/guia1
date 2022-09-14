addEventListener("DOMContentLoaded",()=>{
    let nombre=(prompt(`ingreese su nombre:`))
    let hrs=Number(prompt(`ingrese el numero de horas que trabajo:`))
    let pxh=15300
    let res=(hrs*pxh)
    console.log(`las horas de trabajo son :${res}`);
})