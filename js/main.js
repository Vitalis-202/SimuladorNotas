//Simulador de Notas x3 asignatura
//Variables e ingreso de datos
console.log("Simulador de promedio.");
console.log("La escala de notas va de 1 a 10.")
console.log("Aprobación: Nota 6 hacia arriba")
let nombre = prompt("Ingresa tu nombre:");
let n1 = parseInt(prompt("Ingresa primera nota."));
while(n1<=0 || n1>10) {
    n1 = parseInt(prompt("Ingresa Nota entre 1 a 10."));
}
let n2 = parseInt(prompt("Ingresa segunda nota."));
while(n2<=0 || n2>10) {
    n1 = parseInt(prompt("Ingresa Nota entre 1 a 10."));
}
let n3 = parseInt(prompt("Ingresa tercera nota."));
while(n3<=0 || n3>10) {
    n1 = parseInt(prompt("Ingresa Nota entre 1 a 10."));
}
let calcularPromedio;
let promedio;
let aprobar
let estado;
//Función promedio
calcularPromedio = (n1,n2,n3) =>{
    return Math.round((n1+n2+n3)/3);
}
//Función aprobar
aprobar = (promedio) =>{
    if (promedio>=6) {
        estado = "Aprobado";
    }else{
        estado = "Reprobado";
    }
    return estado;
}
//Resultados.
console.log("Bienvenido "+nombre);
console.log("Tu promedio es "+calcularPromedio(n1,n2,n3));
console.log("Estado: "+aprobar(calcularPromedio(n1,n2,n3)));