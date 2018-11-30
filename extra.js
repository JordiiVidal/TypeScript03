var Extra = /** @class */ (function () {
    function Extra(precio, url) {
        this.precio = precio;
        this.url = url;
    }
    Extra.prototype.getHtml = function () {
        return "<div class='card' style='width: 18rem;'><img class='card-img-top' src='" + this.url + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>Precio</h5><p class='card-text'>" + this.precio + "</p></div></div>";
    };
    return Extra;
}());
var extra = new Extra(12, 'assets/gucci.jpg');
var container = document.getElementById("imagen");
container.innerHTML = extra.getHtml();
