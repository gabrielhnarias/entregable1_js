
alert ("Operación matemática rápida: ¿Cuál es el número resultante de la suma de los dos números faltantes de los mencioando a continuación? Contando de 1 a 5")
    for (let i=1; i <= 5; i++) {
        if (i==2) {
            continue
        }  
        if (i==4) {
            continue
        }   
        alert(i)
}
let resultado = prompt ("Ingrese el resultado")
while (resultado != "6") {
    alert("Vuelve a intentarlo, los números que aparecieron fueron: 1, 3, 5. ¿Cuanto suman los faltantes?")
    resultado = prompt ("Ingrese un nuevo resultado")
}
alert("¡¡Felicidades, eres un genio!!")