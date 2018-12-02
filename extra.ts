
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
        return "<div class='col-2'><div class='card' style='width:100%;'><img class='card-img-top' src='"+this.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : "+this.nombre+"</h5><p class='card-text'>Precio : "+this.precio+"</p></div></div></div>";
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
        var html = "<div class='card col-4' style='width: 18rem;'><img class='card-img-top' src='"+extra.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+this.nombre+"</h5>"+this.velocidad+"</div></div>";
        html += "<div clas='col-8' style='padding:20px;'><h3>Extas</h3><div class='card-group'>";
        for (let extra of this.extras) {
            html +="<div class='card' style='width: 18rem;margin:10px;'><img class='card-img-top' src='"+extra.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : "+extra.nombre+"</h5><p class='card-text'>Precio : "+extra.precio+"</p></div></div>";

        }
        html += "</div>";
        return html;

    }

}

let extra = new Extra(12,'Bolso Gucci','assets/gucci.jpg');
let extra2 = new Extra(12,'Cinturon Gucci','assets/gucci.jpg');

let container = <HTMLElement>document.getElementById("extras");
let container2 = <HTMLElement>document.getElementById("coches");

container.innerHTML = extra.getHtml();
container.innerHTML += extra2.getHtml();
let coche = new Coche("Golf IV",'', 200);
coche.addExtra(extra);
coche.addExtra(extra2);
container2.innerHTML = coche.getHtml();
