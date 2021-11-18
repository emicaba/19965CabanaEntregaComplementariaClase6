class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
    }
}
const personas = [];
personas.push(new Persona ("emiliano", 32));
personas.push(new Persona ("michelle", 35));
personas.push(new Persona ("manuel", 30));
personas.push(new Persona ("sabrina", 28));
personas.push(new Persona ("andrea", 58));
personas.push(new Persona ("gabriel", 61));
personas.push(new Persona ("dayana", 33));
personas.push(new Persona ("jorge", 40));

console.log(personas)
personas.sort((a,b)=>a.edad - b.edad);
console.table(personas)