interface GruposMusicales {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
};

const NombreEstilo = "border-radious: bold; font-size: 18px; background-color: green;"

let grupoA : GruposMusicales = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
};

let grupoB : GruposMusicales = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock",
};

let grupoC : GruposMusicales = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: "🤘 Hard Rock",
};

let grupoD : GruposMusicales = {
    nombre: "Ludwig van Beethoven",
    año: 1970,
    activo: false,
    genero: "🎼 Clásica",
};

let grupoE : GruposMusicales = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock"
};

console.log(`Nombre: %c${grupoA.nombre}`, NombreEstilo);
console.log(`Año: ${grupoA.año}`);
console.log(`Activo: ${grupoA.activo}`);
console.log(`Género: ${grupoA.genero}`);

console.log(`Nombre: %c${grupoB.nombre}`, NombreEstilo);
console.log(`Año: ${grupoB.año}`);
console.log(`Activo: ${grupoB.activo}`);
console.log(`Género: ${grupoB.genero}`);

console.log(`Nombre: %c${grupoC.nombre}`, NombreEstilo);
console.log(`Año: ${grupoC.año}`);
console.log(`Activo: ${grupoC.activo}`);
console.log(`Género: ${grupoC.genero}`);

console.log(`Nombre: %c${grupoD.nombre}`, NombreEstilo);
console.log(`Año: ${grupoD.año}`);
console.log(`Activo: ${grupoD.activo}`);
console.log(`Género: ${grupoD.genero}`);

console.log(`Nombre: %c${grupoE.nombre}`, NombreEstilo);
console.log(`Año: ${grupoE.año}`);
console.log(`Activo: ${grupoE.activo}`);
console.log(`Género: ${grupoE.genero}`);






