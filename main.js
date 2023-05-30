//Variables

let nombre='Ana'
console.log(nombre);

let ciudad= 'Cádiz';
console.log(ciudad)

let andaluza = true;
console.log(andaluza)

const BirthYear = 1987;
console.log(BirthYear);

let CurrentYear = 2023
console.log (CurrentYear);

const BirthPlace = 'Córdoba'
console.log (BirthPlace);

let LivingPlace = 'Ferrol'
console.log (LivingPlace);

const DaysYear = 365;

console.log(DaysYear)
const MonthsYear = 12;
console.log(MonthsYear)
const DaysMonth = 30;
console.log(DaysMonth)

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

console.log(coche)

let objetoCoche = document.getElementById('objetoCoche')

let cochePantalla = `
<h2>Información del coche:</h2>
<p>Marca: ${coche.marca}</p>
<p>Puertas: ${coche.puertas}</p>
<p>Ruedas: ${coche.ruedas}</p>
<p>Plazas: ${coche.plazas}</p>
<p>Modelo: ${coche.modelo}</p>
<h3>Características:</h3>
<p>Color: ${coche.características.color}</p>
<p>Año: ${coche.características.anyo}</p>
`;

objetoCoche.innerHTML = cochePantalla;
























