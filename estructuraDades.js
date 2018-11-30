console.log('asa');
var miarray = [];
var alumnes = new Array("maria", "marta"); //posicion 0 y 1 valdran eso
alumnes[10] = "sasas";
console.dir(alumnes);
console.log(alumnes[1]);
miarray[6] = "DrVale";
var profes = ["Octopus", "Oak"];
profes['77129676G'] = "asasa";
console.dir(profes);
for (var k = 0; k < alumnes.length; k++) {
    console.log(alumnes[k]);
}
for (var key in profes) {
    console.log("key " + key + " profe " + profes[key]);
}
profes.forEach(function (element) {
    console.log(element);
});
var alumnes21 = ["ya", "yo"];
var aulas = [];
aulas[21] = alumnes21;
var directores = {
    'sdsad': 'sdasdas'
};
