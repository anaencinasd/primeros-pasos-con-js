



//Variables

//Número

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

//string

let userName='Ana';
document.getElementById("userNameCardText").textContent += userName;
console.log(document.getElementById("userNameCardText").textContent);

let city= 'Cádiz';
document.getElementById("cityCardText").textContent += city;
console.log(document.getElementById("cityCardText").textContent);

const BirthPlace = 'Córdoba';
document.getElementById("BirthPlaceCardText").textContent += BirthPlace;
console.log(document.getElementById("BirthPlaceCardText").textContent)

let LivingPlace = 'Ferrol'
document.getElementById("LivingPlaceCardText").textContent += LivingPlace
console.log (document.getElementById("LivingPlaceCardText").textContent)

//boolean

let andaluza = true;
document.getElementById("andaluzaCardText").textContent += andaluza
console.log(document.getElementById("andaluzaCardText").textContent)

let gallega = false;
document.getElementById("gallegaCardText").textContent += gallega;
console.log(document.getElementById("gallegaCardText").textContent)

//OPERACIONES MATEMÁTICAS SIMPLES

let sum = DaysYear + DaysMonth;
document.getElementById("sumCardText").textContent += sum
console.log(document.getElementById("sumCardText").textContent)

let sub = CurrentYear - BirthYear;
document.getElementById("subCardText").textContent += sub +" " + "años"
console.log(document.getElementById("subCardText").textContent)

let multiplication = MonthsYear * 30
document.getElementById("multiplicationCardText").textContent += sub +" " + "meses"
console.log(document.getElementById("multiplicationCardText").textContent)

let division = DaysYear / MonthsYear
document.getElementById("divisionCardText").textContent += sub +" " + "días"
console.log(document.getElementById("multiplicationCardText").textContent)

document.getElementById("stringsCardText").textContent += "Mi nombre es " + userName + ' y vivo en ' + LivingPlace + ', aunque nací en ' + BirthPlace + '.'
console.log(document.getElementById("stringsCardText").textContent)

//FUNCIONES

function saludo (nombre){
    return 'Hola ' + nombre
}

document.getElementById("greetingCardText1").textContent = saludo ("Manu")
document.getElementById("greetingCardText2").textContent = saludo ("María")
console.log (document.getElementById("greetingCardText1").textContent)
console.log (document.getElementById("greetingCardText2").textContent)




function sumar(DaysYear,DaysMonth){
    let resultado = DaysYear + DaysMonth;
    return resultado;
}

document.getElementById("sumFunctionCardText1").textContent += sumar (DaysYear,DaysMonth) + " " + "días"
document.getElementById("sumFunctionCardText2").textContent += sumar (59,72)

console.log (document.getElementById("sumFunctionCardText1").textContent)
console.log(sumar(59,72))























//FUNCIONES




function esPar(numero){

    if(numero % 2 ===0){ 
        return true; // es par
    }
    else {
        return false; // es impar
    }
}

function comprobarParImpar(){
    let numero = document.getElementById("numero").value;
    let resultadoElemento = document.getElementById("resultCardText");

    if(esPar(numero)){
        resultadoElemento.textContent="El número que has introducido es par.";
    } else{
        resultadoElemento.textContent = "El número que has introducido es impar.";
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
























