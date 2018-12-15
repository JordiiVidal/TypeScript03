
class Extra{

    precio: number;
    nombre: string;
    url: string;

    constructor(precio : number, nombre:string ,url: string){
        this.precio = precio;
        this.nombre = nombre;
        this.url = url;
    }

    getHtml(){
        return "<div class='col-3'><div class='card' style='width:100%;'><img class='card-img-top' src='"+this.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : "+this.nombre+"</h5><p class='card-text'>Precio : "+this.precio+" $</p></div></div></div>";
    }
}

class Coche{

    nombre: string;
    url: string;
    velocidad: number;
    extras: Array<Extra>;

    constructor(nombre:string, url:string,velocidad:number){
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.url = url;
        this.extras = [];
    }
    addExtra(extra:Extra){
        this.extras.push(extra);
    }
    getHtml(){
        var html = "<div class='card col-4' style='width: 18rem;margin:10px 0 10px 0'><img class='card-img-top' src='"+extra.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+this.nombre+"</h5>"+this.velocidad+"</div></div>";
        html += "<div class='col-8' style='padding:20px;'><h3>Extas</h3><div class='card-group' style='border: 1px solid black;'>";
        for (let extra of this.extras) {
            html +="<div class='card' style='max-width: 25%;margin:10px;'><img class='card-img-top' src='"+extra.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : "+extra.nombre+"</h5><p class='card-text'>Precio : "+extra.precio+"</p></div></div>";

        }
        html += "</div>";
        return html;

    }

}

let containerE = <HTMLElement>document.getElementById("extras");
let containerC = <HTMLElement>document.getElementById("coches");

var extrasDisponibles = Array<Extra>();

let extra = new Extra(12,'Bolso Gucci','assets/gucci.jpg');
let extra2 = new Extra(12,'Cinturon Gucci','assets/gucci.jpg');

addSelectExtra(extra.nombre);
addSelectExtra(extra2.nombre);

extrasDisponibles.push(extra);
extrasDisponibles.push(extra2);

function mostrarExtras(){
    containerE.innerHTML = '';
    for(var extra of extrasDisponibles){
        containerE.innerHTML += extra.getHtml();
    }
}

var cochesDisponibles = Array<Coche>();
cochesDisponibles = [];

let coche = new Coche("Mercedes",'', 200);
let coche2 = new Coche("GolfV",'', 200);

coche.addExtra(extra);

cochesDisponibles[coche.nombre] = coche;
cochesDisponibles[coche2.nombre] = coche2;

addSelectCoche(coche.nombre);
addSelectCoche(coche2.nombre);

function mostrarCoches(){
    containerC.innerHTML = '';

    for(var nombre in cochesDisponibles){

        containerC.innerHTML += cochesDisponibles[nombre].getHtml();

    }
}

/**BOTONES SHOW DIV EXTRA */
let btnshowAdd = <HTMLElement>document.getElementById("btnAddE");
let btnshowDel = <HTMLElement>document.getElementById("btnDelE");

/**BOTONES ADD AND DELETE EXTRA */
let btnAddExtra = <HTMLElement>document.getElementById("addExtra");
let btnDelExtra = <HTMLElement>document.getElementById("deleteExtra");

btnshowAdd.addEventListener('click',shownewExtra,false);
btnshowDel.addEventListener('click',showdeleteExtra,false);

btnAddExtra.addEventListener('click',addExtra,false);
btnDelExtra.addEventListener('click',deleteExtra,false);

//*BOTONES SHOW DIV COCHE*/

let btnshowAddC = <HTMLElement>document.getElementById("btnAddC");
let btnshowAddEC = <HTMLElement>document.getElementById("btnAddEC");

btnshowAddC.addEventListener('click',shownewCoche,false);
btnshowAddEC.addEventListener('click',showaddExtraCoche,false);

/**BOTONES ADD COCHE */
let btnAddCoche = <HTMLElement>document.getElementById("addCoche");
let btnAddExtraCoche = <HTMLElement>document.getElementById("addExtraCoche");
btnAddCoche.addEventListener('click',addCoche,false);
btnAddExtraCoche.addEventListener('click',addExtraCoche,false);

mostrarExtras();
mostrarCoches();


/*Funciones Botones*/

    /**Extra */
    function shownewExtra(){
        let divAdd = <HTMLElement>document.getElementById("GestionAE");
        let divDelete = <HTMLElement>document.getElementById("GestionDE");
        divAdd.hidden = !divAdd.hidden;
        divDelete.hidden = true;
    }
    function showdeleteExtra(){
        let divAdd = <HTMLElement>document.getElementById("GestionAE");
        let divDelete = <HTMLElement>document.getElementById("GestionDE");
        divAdd.hidden = true;
        divDelete.hidden = !divDelete.hidden;
    }

    function addExtra(){

        let inputNombre: HTMLInputElement = <HTMLInputElement>document.getElementById('nombre-extra');
        let inputPrecio: HTMLInputElement = <HTMLInputElement>document.getElementById('precio-extra');
        let selectImagen:HTMLSelectElement = <HTMLSelectElement>document.getElementById('imagen-extra');

        let extra = new Extra(parseInt(inputPrecio.value),inputNombre.value,selectImagen.value);

        extrasDisponibles.push(extra);

        addSelectExtra(extra.nombre);

        mostrarExtras();
    }

    function deleteExtra(){

        let inputPosicion: HTMLInputElement = <HTMLInputElement>document.getElementById('posicion-extra');

        extrasDisponibles.splice(parseInt(inputPosicion.value), 1);

        deleteSelectExtra(inputPosicion.value);

        mostrarExtras();

    }

    /**Coche */

    function shownewCoche(){

        let divAdd = <HTMLElement>document.getElementById("GestionAC");
        let divAddE = <HTMLElement>document.getElementById("GestionAEC");
        divAdd.hidden = !divAdd.hidden;

        divAddE.hidden = true;

    }
    
    function showaddExtraCoche(){

        let divAdd = <HTMLElement>document.getElementById("GestionAC");
        let divAddE = <HTMLElement>document.getElementById("GestionAEC");
        divAdd.hidden = true;
        divAddE.hidden = !divAddE.hidden;

    }

    function addCoche(){

        let inputNombre: HTMLInputElement = <HTMLInputElement>document.getElementById('nombre-coche');
        let inputVelocidad: HTMLInputElement = <HTMLInputElement>document.getElementById('velocidad-coche');
        let selectImagen:HTMLSelectElement = <HTMLSelectElement>document.getElementById('imagen-coche');

        let coche = new Coche(inputNombre.value,selectImagen.value, parseInt(inputVelocidad.value));

        cochesDisponibles[coche.nombre] = coche;

        addSelectCoche(coche.nombre);

        mostrarCoches();
    }

    function addSelectExtra(nombre:string){

        let selectExtra:HTMLSelectElement = <HTMLSelectElement>document.getElementById('select-extra');

        var option = document.createElement('option');
        option.value = nombre;
        option.text = nombre;

        selectExtra.add(option);

    }
    function deleteSelectExtra(index:string){

        let selectExtra:HTMLSelectElement = <HTMLSelectElement>document.getElementById('select-extra');

        selectExtra.remove(parseInt(index));
    }
    function addSelectCoche(nombre){

        var selectCoche:HTMLSelectElement = <HTMLSelectElement>document.getElementById('select-coche');
    
            var option = document.createElement('option');
            option.value = nombre;
            option.text = nombre;
    
            selectCoche.add(option);

    }

    function addExtraCoche(){

        let selectExtra:HTMLSelectElement = <HTMLSelectElement>document.getElementById('select-extra');
        let selectCoche:HTMLSelectElement = <HTMLSelectElement>document.getElementById('select-coche');

        for(let key in cochesDisponibles){
            if(cochesDisponibles[key].nombre === selectCoche.value){
                for(var extra of extrasDisponibles){
                    if(extra.nombre === selectExtra.value){
                        cochesDisponibles[key].addExtra(extra);
                    }
                }
            }
        }

        mostrarCoches();


    }
    

