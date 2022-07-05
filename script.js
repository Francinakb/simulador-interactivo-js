// La idea de este simulador es dar un estimativo de promedio de edades de alumnxs para saber a que curso estimativo pertenecen


//aplico las variables para 6 alumnxs y sus respectivas edades
let edad1 = parseFloat(prompt("Han registrado un total de 6 alumnxs nuevos. Por favor, ingrese la edad de cada unx para entregarles el promedio equivalente de sus edades. Edad alumnx 1:"))
let edad2 = parseFloat(prompt("Edad de alumnx 2:"))
let edad3 = parseFloat(prompt("Edad de alumnx 3:"))
let edad4 = parseFloat(prompt("Edad de alumnx 4:"))
let edad5 = parseFloat(prompt("Edad de alumnx 5:"))
let edad6 = parseFloat(prompt("Edad de alumnx 6:"))

//aplico una funcion para el registro de dichos alumnxs donde aclaro la suma de sus edades, y que retorne el promedio
function registroAlumnxs(edad1, edad2, edad3, edad4, edad5, edad6) {

    let edades = edad1 + edad2 + edad3 + edad4 + edad5 + edad6

    let promedio = edades / 6

    return promedio
}

// console.log concateno con backticks el promedio y el registro
console.log (`El promedio de edad de lxs alumnxs registradxs es de ${registroAlumnxs(edad1, edad2, edad3, edad4, edad5, edad6)} años.`)




