console.log('asa');

let miarray = [];
let alumnes = new Array("maria", "marta"); //posicion 0 y 1 valdran eso
alumnes[10] = "sasas";
console.dir(alumnes);
console.log(alumnes[1]);

miarray[6] = "DrVale";

let profes = ["Octopus", "Oak"];
profes['77129676G'] = "asasa";

console.dir(profes);

for (let k = 0; k<alumnes.length; k++){
    console.log(alumnes[k]);
}

for(let key in profes){

    console.log("key "+key+ " profe "+profes[key]);

}

profes.forEach(element => {

    console.log(element);

});
let alumnes21 = ["ya","yo"];
let aulas = [];
aulas[21] = alumnes21;

let directores = {
    'sdsad':'sdasdas'
};


