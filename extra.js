var Extra = /** @class */ (function () {
    function Extra(precio, nombre, url) {
        this.precio = precio;
        this.nombre = nombre;
        this.url = url;
    }
    Extra.prototype.getHtml = function () {
        return "<div class='col-2'><div class='card' style='width:100%;'><img class='card-img-top' src='" + this.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : " + this.nombre + "</h5><p class='card-text'>Precio : " + this.precio + "</p></div></div></div>";
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
        var html = "<div class='card col-4' style='width: 18rem;'><img class='card-img-top' src='" + extra.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + this.nombre + "</h5>" + this.velocidad + "</div></div>";
        html += "<div clas='col-8' style='padding:20px;'><h3>Extas</h3><div class='card-group'>";
        for (var _i = 0, _a = this.extras; _i < _a.length; _i++) {
            var extra_1 = _a[_i];
            html += "<div class='card' style='width: 18rem;margin:10px;'><img class='card-img-top' src='" + extra_1.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Extra : " + extra_1.nombre + "</h5><p class='card-text'>Precio : " + extra_1.precio + "</p></div></div>";
        }
        html += "</div>";
        return html;
    };
    return Coche;
}());
var extra = new Extra(12, 'Bolso Gucci', 'assets/gucci.jpg');
var extra2 = new Extra(12, 'Cinturon Gucci', 'assets/gucci.jpg');
var container = document.getElementById("extras");
var container2 = document.getElementById("coches");
container.innerHTML = extra.getHtml();
container.innerHTML += extra2.getHtml();
var coche = new Coche("Golf IV", '', 200);
coche.addExtra(extra);
coche.addExtra(extra2);
container2.innerHTML = coche.getHtml();
