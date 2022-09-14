addEventListener("DOMContentLoaded",()=>{
    //Escribir un programa que sume,reste,multiplique y divida dos numeros

    let num1 = Number(prompt("Ingrese el numero 1: ",2));
    let num2 = Number(prompt("Ingrese el numero 2:",2));

    console.log(`La suma es ${num1}+ ${num2} = ${num1 + num2}`);
    console.log(`La resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicación es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La división es ${num1} / ${num2} = ${num1 / num2}`);
})