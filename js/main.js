/*

Formato: Página HTML y  código fuente en JavaScript
Sugerencia: Es posible asociar más de un evento a un elemento y se pueden emplear función comunes, anónimas y arrow para los manejadores de eventos.


>> Consigna: Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  de la interfaz de nuestro simulador

>>Ejemplo:
Cuando el usuario completa algún dato, por ejemplo cantidad de cuotas, se captura ese dato y se agregan elementos al DOM mediante JS.
Capturar la tecla ENTER para confirmar alguna acción.


*/


const carro = [];

let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', validarFormulario); //uso de eventos

function validarFormulario (e) {

    e.preventDefault();

    let formulario = e.target;

    let numeroPasajeros = formulario.children[1].value;
    let numeroIsla = formulario.children[5].value;
    let numeroServicio = formulario.children[9].value;

    //console.log(numeroPasajeros);
    //console.log(numeroIsla);
    //console.log(numeroServicio);

    carro.push(numeroPasajeros); 
    carro.push(numeroIsla);
    carro.push(numeroServicio);

    console.log(carro);

    class isla {
        constructor(id , nombre , precio) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
        }
    
        sumaTasas(){
            this.precio = (this.precio * numeroPasajeros * 1.12).toFixed(0); //pasajeros input
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
            this.precio = (this.precio * numeroPasajeros * 1.19).toFixed(0); //pasajeros input
        }
    }
    
    const servicios = [];
    
    
    servicios.push(new servicio(1 , "Pick-up ida y vuelta al aeropuerto" , 50));
    servicios.push(new servicio(2 , "Tarde de Buceo" , 120));
    servicios.push(new servicio(3 , "Stand up paddle por 2 horas" , 35));
    servicios.push(new servicio(4 , "ningún servicio extra" , 0)); 
    
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
    

    let encontradoIsla = islas.find(isla => isla.id == numeroIsla); // input isla
    let encontradoServicio = servicios.find(servicio => servicio.id == numeroServicio); //input servicio
    
    let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);
    
    
    function cotizar() {
    

    
        //console.log(encontradoIsla.precio); 
        //console.log(encontradoServicio.precio);
    

    
        //console.log(precioTotal);

    }
    
    cotizar();
    
    
    
    //generar html a partir de un array:

    function mensajeFinal () {
      // crea un nuevo div
      // y añade contenido
      let opcion = document.getElementById("cotizar");// acá hice un cambio
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `<p>Cotizaste un viaje a ${encontradoIsla.nombre} para ${numeroPasajeros} personas, contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p>`;
      newDiv.style.color = "blue";
      newDiv.style.fontSize = "1.5rem";
      newDiv.style.padding = "4rem";
      
      opcion.appendChild(newDiv); //añade texto al div creado.
    
      // añade el elemento creado y su contenido al DOM
      let currentDiv = document.getElementById("imagenCotizar");
      document.body.insertBefore(newDiv, currentDiv);
    }
    
    mensajeFinal ();
    

}

// Me sale e siguiebte error en la consola que no entiendo, porque el html que genero igual se muestra en la página:  main.js:142 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node. at mensajeFinal (file:///C:/proyectos_coder/proyectojs/proyectofinaljs/js/main.js:142:21) at HTMLFormElement.validarFormulario (file:///C:/proyectos_coder/proyectojs/proyectofinaljs/js/main.js:145:5)


const clientes = [];


/*
let contacto = document.getElementById('contacto');
contacto.addEventListener('submit', guardarBase);

function guardarBase(){

    let name = document.getElementById('name');
    let lastName = document.getElementById('lastName');
    let inputEmail4 = document.getElementById('inputEmail4');
    let inputPhone = document.getElementById('inputPhone');

    localStorage.setItem( name , lastName ,inputEmail4 , inputPhone);
}

*/

let contacto = document.getElementById('contacto');
contacto.addEventListener('submit', guardarBase); 

function guardarBase (e) {

    e.preventDefault();

    let formulario = e.target;

    let name = formulario.children[1].value;
    let lastName = formulario.children[5].value;
    let inputEmail4 = formulario.children[9].value;
    let inputPhone = formulario.children[13].value;

    //console.log(name);
    //console.log(lastName);
    //console.log(inputEmail4);
    //console.log(inputPhone);

    clientes.push(name); 
    clientes.push(lastName);
    clientes.push(inputEmail4);
    clientes.push(inputPhone);

    //console.log(clientes);

    localStorage.setItem('baseClientes' , JSON.stringify(clientes));

    let base = localStorage.getItem('baseClientes');

    base = JSON.parse(base);

    console.log(base);
    
}








