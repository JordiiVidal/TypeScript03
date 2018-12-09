var Extra = /** @class */ (function () {
    function Extra(precio, nombre, url) {
        this.precio = precio;
        this.nombre = nombre;
        this.url = url;
    }
    Extra.prototype.getHtml = function () {
        return "<div class='col-3'><div class='card' style='width:100%;'><img class='card-img-top' src='" + this.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : " + this.nombre + "</h5><p class='card-text'>Precio : " + this.precio + " $</p></div></div></div>";
    };
    return Extra;
}());
var Coche = /** @class */ (function () {
    function Coche(nombre, url, velocidad) {
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.url = url;
        this.extras = [];
    }
    Coche.prototype.addExtra = function (extra) {
        this.extras.push(extra);
    };
    Coche.prototype.getHtml = function () {
        var html = "<div class='card col-4' style='width: 18rem;margin:10px 0 10px 0'><img class='card-img-top' src='" + extra.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + this.nombre + "</h5>" + this.velocidad + "</div></div>";
        html += "<div class='col-8' style='padding:20px;'><h3>Extas</h3><div class='card-group' style='border: 1px solid black;'>";
        for (var _i = 0, _a = this.extras; _i < _a.length; _i++) {
            var extra_1 = _a[_i];
            html += "<div class='card' style='max-width: 25%;margin:10px;'><img class='card-img-top' src='" + extra_1.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : " + extra_1.nombre + "</h5><p class='card-text'>Precio : " + extra_1.precio + "</p></div></div>";
        }
        html += "</div>";
        return html;
    };
    return Coche;
}());
var containerE = document.getElementById("extras");
var containerC = document.getElementById("coches");
/**BOTONES SHOW DIV EXTRA */
var btnshowAdd = document.getElementById("btnAddE");
var btnshowDel = document.getElementById("btnDelE");
btnshowAdd.addEventListener('click', shownewExtra, false);
btnshowDel.addEventListener('click', showdeleteExtra, false);
var extrasDisponibles = Array();
var extra = new Extra(12, 'Bolso Gucci', 'assets/gucci.jpg');
var extra2 = new Extra(12, 'Cinturon Gucci', 'assets/gucci.jpg');
extrasDisponibles.push(extra);
extrasDisponibles.push(extra2);
function mostrarExtras() {
    containerE.innerHTML = '';
    for (var _i = 0, extrasDisponibles_1 = extrasDisponibles; _i < extrasDisponibles_1.length; _i++) {
        var extra = extrasDisponibles_1[_i];
        containerE.innerHTML += extra.getHtml();
    }
}
var cochesDisponibles = Array();
cochesDisponibles = [];
var coche = new Coche("Golf IV", '', 200);
var coche2 = new Coche("GolfIV", '', 200);
coche.addExtra(extra);
cochesDisponibles[coche.nombre] = coche;
cochesDisponibles[coche2.nombre] = coche2;
function mostrarCoches() {
    containerC.innerHTML = '';
    for (var nombre in cochesDisponibles) {
        containerC.innerHTML += cochesDisponibles[nombre].getHtml();
    }
}
mostrarExtras();
mostrarCoches();
/*Funciones Botones*/
function shownewExtra() {
    var divAdd = document.getElementById("GestionAE");
    var divDelete = document.getElementById("GestionDE");
    divAdd.hidden = !divAdd.hidden;
    divDelete.hidden = true;
}
function showdeleteExtra() {
    var divAdd = document.getElementById("GestionAE");
    var divDelete = document.getElementById("GestionDE");
    divAdd.hidden = true;
    divDelete.hidden = !divDelete.hidden;
}
