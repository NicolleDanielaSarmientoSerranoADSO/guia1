addEventListener("DOMContentLoaded",()=>{
    let radio=0, v=4/3
    radio=Number(prompt("Ingrese el radio de la esfera",3));
    let vesfera=(v*3.14*radio**2);
    console.log(`La respuesta es: ${vesfera}`);
})