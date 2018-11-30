class Extra{

    precio: number;
    url: string;

    constructor(precio : number,url: string){
        this.precio = precio;
        this.url = url;
    }

    getHtml(){
        return "<div class='card' style='width: 18rem;'><img class='card-img-top' src='"+this.url+"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Precio</h5><p class='card-text'>"+this.precio+"</p></div></div>";
    }
}
class Coche{

    nombre: string;
    velocidad: number;
    extras: Extra[];

    constructor(nombre:string, velocidad:number, extras: Extra[]){
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.extras = extras;
    }
    addExtra(extra:Extra){
        this.extras.push(extra);
    }

}
let extra = new Extra(12,'assets/gucci.jpg');
let container = <HTMLElement>document.getElementById("imagen");
container.innerHTML = extra.getHtml();
