addEventListener("DOMContentLoaded",()=>{
    let a=Number(prompt(`coloque el valor de la 1ranota :`))
    let b=Number(prompt(`coloque el valor de la 2da nota:`))
    let c=Number(prompt(`coloque el valor de la 3ra nota:`))
    let efl=Number(prompt(`coloque el valor del examen :`))
    let trl=Number(prompt(`coloque el valor del trabajo final :`)) 
    let promedio=(a+b+c)/3
    let fnl=(promedio*0.55)+(efl*0.30)+(trl*0.15)
    console.log(`promedio final:${fnl}`);
})