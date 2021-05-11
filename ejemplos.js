// Declaracion de variables
let grupo;
let facultad = "contaduria";

// constantes
const FACTOR_AUMENTO = 0.3;

// enviar el contenido a la consola
console.log(grupo, facultad);

// enviar el contenido al documento
document.write(facultad);

let estados = ["nuevo leon", "chiapas"];
console.log(estados)
console.log(typeof estados)
document.write(estados);

let facultadObjeto = {
    nombre : "Facpya",
    numAlumnos : 15000,
    estadosProcedencia : estados
};
console.log(facultadObjeto)
document.write(facultadObjeto);

document.write("<h1>hola</h1>");

//let leguaje = prompt("Lenguaje favorito");

// ejemplo if
let facu = "Facpya";

if (facu === "Facpya") {
    console.log("Materias re: admin, python")
}
else if(facu === "fime") {
    console.log("mMterias recomendadas: quimica, fisica")
}
else if(facu === "fod") {
    console.log("mMterias recomendadas: x, y")
}
else {
    console.log("mMterias recomendadas: historia de mexico")
}

switch(facu){
    case "Facpya":
        console.log("facpya")
        break;
    case "fime":
        console.log("fime")
        break;
    case "fod":
        console.log("fod")
        break;
    default:
        console.log("otra faculad");
        break;
}



for(let iteracion=1; iteracion <=100; iteracion++) {
    document.write(iteracion + "<br>");
}



/* while sumar los numeros del 1 al 100*/
let num = 1;
let resultado = 0;
while(num <= 100){
    resultado += num;
    num++;
}
document.write("Ls suma es: ",resultado);


/* Do-while*/
let r=0;
let n=1;
do {
    r += n;
    n++;
} while(n <= 100);
document.write("<br>La suma con do-while es: ",r)


/* funcion como variable */
const sumaRango = function(numIni,numFin){
    let r = 0;
    for(let n= numIni; n < numFin; n++) {
        r += n;
    }
    return r;
};
document.write("<br>La suma con funcion: ", sumaRango(1,100) );


/* funcion declaracion */
function repetir(n,valor){
    for(let i=1; i <=n; i++){
        document.write(valor);
    }
}
repetir(5,"+");


/* funcion fecha */
const checaMayor = (n1,n2) => {
    if(n1 > n2) {
        return n1;
    }
    else{
        return n2;
    }
};
document.write(checaMayor(12,1));

/* funcion flecha reducida */
const saludo2 = texto => document.write("<h1>" + texto + "</h1>");

saludo2("Funcion flecha reducida");




let parrafos = document.getElementsByTagName("p");
console.log(parrafos.length);
console.log(parrafos[1].textContenet);

parrafos[0].textContenet = "grupo51";




let fechaActual = new Date();
let hora = fechaActual.toLocaleTimeString();
console.log(hora);

if (hora < 12){
    parrafos[0].textContenet = "bueno dias";
}
else {
    parrafos[0].textContenet = "buenas tardes";
}




let pReloj = document.getElementById("reloj");

function mostrarHora(){
    let fechaActual = new Date();
    pReloj.textContent = fechaActual.toLocaleTimeString();
}
setInterval("mostrarHora()",1000)