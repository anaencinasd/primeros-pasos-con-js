//Variables

//Número



let nombre='Ana'
console.log(nombre);

let ciudad= 'Cádiz';
console.log(ciudad)

let andaluza = true;
console.log(andaluza)


const BirthYear = 1987;
document.getElementById('birthYearCardText').textContent += BirthYear;
console.log (document.getElementById("birthYearCardText").textContent)

let CurrentYear = 2023;
document.getElementById ("currentYearCardText").textContent += CurrentYear;
console.log(document.getElementById ("currentYearCardText").textContent)

const DaysYear = 365;
document.getElementById ("DaysYearCardText").textContent += DaysYear + " " + "días";
console.log(document.getElementById("DaysYearCardText").textContent)

const MonthsYear = 12;
document.getElementById("MonthsYearCardText").textContent +=  MonthsYear + " " + "meses";
console.log (document.getElementById("MonthsYearCardText").textContent)

const DaysMonth = 30
document.getElementById ("DaysMonthCardText").textContent += DaysMonth + " " + "días"
console.log (document.getElementById("DaysMonthCardText").textContent)







const BirthPlace = 'Córdoba'
console.log (BirthPlace);

let LivingPlace = 'Ferrol'
console.log (LivingPlace);



let a = 20
let b = 50
let c = 32
let d = 210

let suma = a + b;
console.log(suma);

let resta = d - a;
console.log (resta);

let multiplicacion = c * d
console.log (multiplicacion)

let division = b / d
console.log (division)

console.log ('Mi nombre es ' + nombre + ' y vivo en ' + LivingPlace + ', aunque nací en ' + BirthPlace + '.')



//FUNCIONES

function saludo (nombre){
    return 'Hola ' + nombre
}
console.log (saludo ('mundo'))


function saludar (Ana){
    return 'Hola Ana'
}

console.log (saludar)

function sumar(a,b){
    let resultado = a + b
    return resultado

}

console.log (sumar (20,30))

function esPar(numero){

    if(numero % 2 ===0){ 
        return true; // es par
    }
    else {
        return false; // es impar
    }
}

console.log(esPar(4))
console.log(esPar(5))

let coche ={
    marca: "Mercedes",
    puertas:5,
    ruedas:4,
    plazas: 5,
    modelo: "deportivo",
    características:{
        color:"azul",
        anyo:2023,
    }
    
}

// console.log(coche)

// let objetoCoche = document.getElementById('objetoCoche')

// let cochePantalla = `
// <h2>Información del coche:</h2>
// <p>Marca: ${coche.marca}</p>
// <p>Puertas: ${coche.puertas}</p>
// <p>Ruedas: ${coche.ruedas}</p>
// <p>Plazas: ${coche.plazas}</p>
// <p>Modelo: ${coche.modelo}</p>
// <h4>Características:</h4>
// <p>Color: ${coche.características.color}</p>
// <p>Año: ${coche.características.anyo}</p>
// `;

// objetoCoche.innerHTML = cochePantalla;
























