
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

/**BOTONES SHOW DIV EXTRA */
let btnshowAdd = <HTMLElement>document.getElementById("btnAddE");
let btnshowDel = <HTMLElement>document.getElementById("btnDelE");

btnshowAdd.addEventListener('click',shownewExtra,false);
btnshowDel.addEventListener('click',showdeleteExtra,false);


var extrasDisponibles = Array<Extra>();

let extra = new Extra(12,'Bolso Gucci','assets/gucci.jpg');
let extra2 = new Extra(12,'Cinturon Gucci','assets/gucci.jpg');

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

let coche = new Coche("Golf IV",'', 200);
let coche2 = new Coche("GolfIV",'', 200);
coche.addExtra(extra);

cochesDisponibles[coche.nombre] = coche;
cochesDisponibles[coche2.nombre] = coche2;

function mostrarCoches(){
    containerC.innerHTML = '';

    for(var nombre in cochesDisponibles){

        containerC.innerHTML += cochesDisponibles[nombre].getHtml();

    }
}

mostrarExtras();
mostrarCoches();

/*Funciones Botones*/

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


