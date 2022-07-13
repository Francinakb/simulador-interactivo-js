// La idea de este simulador es dar un estimativo de promedio de edades de alumnxs para saber a que curso estimativo pertenecen

alert("Bienvenido! Se han registrado un total de 6 alumnxs nuevos. Por favor, ingrese la edad de cada unx para entregarles el promedio equivalente de sus edades.")

//aplico una funcion flecha para el registro de dichos alumnxs donde aclaro la suma de sus edades, y que retorne el promedio
const promedio = (edad1, edad2, edad3, edad4, edad5, edad6) => (edad1 + edad2 + edad3 + edad4 + edad5 + edad6)/6

//aplico las variables para 6 alumnxs y sus respectivas edades
let edad1, edad2, edad3, edad4, edad5, edad6

//aplico ciclo do while 
do{
    edad1 = parseInt(prompt("Ingrese edad del alumnx 1:"))
    edad2 = parseInt(prompt("Ingrese edad del alumnx 2:")) 
    edad3 = parseInt(prompt("Ingrese edad del alumnx 3:"))
    edad4 = parseInt(prompt("Ingrese edad del alumnx 4:"))
    edad5 = parseInt(prompt("Ingrese edad del alumnx 5:"))
    edad6 = parseInt(prompt("Ingrese edad del alumnx 6:"))

    //aplico algoritmo condicional
    if(isNaN(edad1) || isNaN(edad2) || isNaN(edad3) || isNaN(edad4) || isNaN(edad5) || isNaN(edad6)){
        alert ("Ingrese numeros enteros")
    }
    
    // alert y concateno con backticks el promedio 
    alert(`El promedio de edad de lxs alumnxs registradxs es de ${promedio(edad1, edad2, edad3, edad4, edad5, edad6)} años.`)

}while(isNaN(edad1) || isNaN(edad2) || isNaN(edad3) || isNaN(edad4) || isNaN(edad5) || isNaN(edad6))










