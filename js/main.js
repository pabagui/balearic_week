/*

Formato:  Página HTML y  código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “claseApellido”
Sugerencia: Recuerda que jQuery es una librería que simplifica la notaciòn JS. Es posible reemplazar con selectores todos los mètodos nativos de acceso al DOM. Así como reemplazar toda definición de eventos de vanilla JS por on o métodos shortcut 

>> Consigna: Sumar al proyecto integrador los conceptos de jQuery que vimos en las últimas dos clases:
-Utilizar métodos jQuery para incorporar elementos al DOM.
-Utilizar métodos jQuery para determinar respuesta a ciertos eventos.
>>Aspectos a incluir en el entregable: 
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript con mètodos jQuery para seleccionar, agregar y definir eventos.
>>Ejemplo:
Manejo de eventos del proyecto: clicks del usuario, cambios en inputs, selectores, etc
Cualquier modificación que necesites hacer sobre el DOM con la página ya cargada: por ejemplo, al seleccionar una opción de un selector aparece una alerta en HTML dando cierta información.
Capturar el evento asociado a presionar ENTER para confirmar el envío de los datos.


*/

//uso de método ready de jquery
$(() => {
    console.log('El DOM esta listo');
});


const carro = [];

let miFormulario = $('#formulario');//selector jquery
miFormulario.submit(function (e) { //uso de evento jquery

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
      // crea un nuevo div con método append de Jquery


      $("#cotizar").append(`<div id ="newDiv"><p>Cotizaste un viaje a ${encontradoIsla.nombre} para ${numeroPasajeros} personas, contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p></div>`);

      
      
      $("#newDiv").css("color", "#2284E6"); //uso de método css de jquery
      $("#newDiv").css("fontSize", "1.5rem");
      $("#newDiv").css("padding", "4rem");
      
      //opcion.appendChild(newDiv); //añade texto al div creado.
    
      // añade el elemento creado y su contenido al DOM
     // let currentDiv = document.getElementById("imagenCotizar");
      //document.body.insertBefore(newDiv, currentDiv);
    }
    
    mensajeFinal ();

    /*
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

    */
    




}); //uso de eventos



// Me sale e siguiente error en la consola que no entiendo, porque el html que genero igual se muestra en la página:  main.js:142 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node. at mensajeFinal (file:///C:/proyectos_coder/proyectojs/proyectofinaljs/js/main.js:142:21) at HTMLFormElement.validarFormulario (file:///C:/proyectos_coder/proyectojs/proyectofinaljs/js/main.js:145:5)


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

let contacto = $('#contacto'); //uso de selector jquery
contacto.submit(function (e) { //uso de evento jquery

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
    
})








