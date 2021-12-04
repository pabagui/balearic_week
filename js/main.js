/*

Formato: Página HTML y  código fuente en JavaScript
Sugerencia: Es posible asociar más de un evento a un elemento y se pueden emplear función comunes, anónimas y arrow para los manejadores de eventos.


>> Consigna: Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  de la interfaz de nuestro simulador

>>Ejemplo:
Cuando el usuario completa algún dato, por ejemplo cantidad de cuotas, se captura ese dato y se agregan elementos al DOM mediante JS.
Capturar la tecla ENTER para confirmar alguna acción.


*/


let pasajeros = parseInt(prompt("Ingresa el número de pasajeros (máximo 9)"));

class isla {
    constructor(id , nombre , precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaTasas(){
        this.precio = (this.precio * pasajeros * 1.12).toFixed(0);
    }

}

const islas =[];

islas.push(new isla(1 , "Ibiza y Formentera" , 650));
islas.push(new isla(2 ,"Mallorca" , 900));
islas.push(new isla(3 , "Menorca" , 750));

for (const isla of islas){
    isla.sumaTasas();
}

//console.log(islas);

class servicio {
    constructor(id , nombre , precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaIVA(){
        this.precio = (this.precio * pasajeros * 1.19).toFixed(0);
    }
}

const servicios = [];


servicios.push(new servicio(1 , "Pick-up ida y vuelta al aeropuerto" , 50));
servicios.push(new servicio(2 , "Tarde de Buceo" , 120));
servicios.push(new servicio(3 , "Stand up paddle por 2 horas" , 35));
servicios.push(new servicio(4 , "ningún servicio extra" , 0)); //opción ningún servicio

for(const servicio of servicios){
    servicio.sumaIVA();
}

//console.log(servicios);


class totalCompra{
    constructor(destino, extra){
        this.destino = destino;
        this.extra = extra;

    }
        
}

const carro = [];
let opcionIsla = parseInt(prompt("Elige el número del destino: \n 1- Ibiza y Formentera \n 2- Mallorca \n 3- Menorca"));
let opcionServicio = parseInt(prompt("Elige el número del servicio extra: \n 1- Pick-up ida y vuelta al aeropuerto: USD$ 50 \n 2- Tarde de buceo: USD$ 120 \n 3- Stand up paddle por 2 horas: USD$ 35 \n 4- Ningún servicio extra"));

//console.log(pasajeros);
//console.log(opcionIsla);
//console.log(opcionServicio);


let encontradoIsla = islas.find(isla => isla.id == opcionIsla);
let encontradoServicio = servicios.find(servicio => servicio.id == opcionServicio);

let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);

function cotizar() {

    /*
    let encontradoIsla = islas.find(isla => isla.id == opcionIsla);
    let encontradoServicio = servicios.find(servicio => servicio.id == opcionServicio);

    */

    console.log(encontradoIsla.precio); 
    console.log(encontradoServicio.precio);

    
   // let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);

    console.log(precioTotal);

    /*
    alert(`Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$` + precioTotal + ".\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo");
    */

    carro.push(pasajeros); //probando si funciona
    carro.push(encontradoIsla);
    carro.push(encontradoServicio);
}

cotizar();
console.log(carro);

/*
function mensajeFinal(){

    let opcion = document.getElementById("otrosservicios");


    let resultado = document.createElement("div");
    
    resultado.innerHTML = `<p>Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p>`;
    
    opcion.appendChild(resultado);

    let divActual = document.getElementById("mensaje");
    document.body.insertBefore(opcion, divActual);

}
mensajeFinal();
*/

/*
document.body.onload = mensajeFinal;

function mensajeFinal () {
  // crea un nuevo div
  // y añade contenido
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode(`Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo`);
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("contacto");
  document.body.insertBefore(newDiv, currentDiv);
}

*/


function mensajeFinal () {
  // crea un nuevo div
  // y añade contenido
  let opcion = document.getElementById("otrosservicios");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<p>Cotizaste un viaje a ${encontradoIsla.nombre} para ${pasajeros} pasajeros, contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p>`;
  newDiv.style.color = "blue";
  newDiv.style.fontSize = "1.5rem";
  newDiv.style.padding = "4rem";
  
  opcion.appendChild(newDiv); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  let currentDiv = document.getElementById("contacto");
  document.body.insertBefore(newDiv, currentDiv);
}

mensajeFinal ();


//probando inputs para reemplazar prompts

// const carro = []; definida anteriormente


class total{
    constructor(numPasajeros, islaElegida , servicioEscogido){
        this.numPasajeros = numPasajeros;
        this.islaElegida = islaElegida;
        this.serviciosEscogido = servicioEscogido;

    }
        
}

function cotizacion () {

    let numPasajeros = document.getElementById("numPasajeros").value;
    let islaElegida = document.getElementById("islaElegida").value;
    let servicioEscogido = document.getElementById("servicioEscogido").value;

    let nuevaCot = new total(numPasajeros, islaElegida, servicioEscogido);
    carro.push(nuevaCot);

    totalJSON = JSON.stringify(numPasajeros.carro);
    localStorage.setItem("1" , totalJSON);


    



}


