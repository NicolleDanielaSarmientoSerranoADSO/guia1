addEventListener("DOMContentLoaded",()=>{
    let lla=int(input("coloque el valor de su llamada:"))
    let min1=355
    let iva=0.20
    let iv=(lla*min1)*iva
    let man=iv+(lla*min1)
    console.log(`el valor de la llamada es: ${man}`);
})