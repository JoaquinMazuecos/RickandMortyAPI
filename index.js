const axios = require("axios");
const fs = require("fs").promises;
const path = require("path")

const main = async() =>{
let response = await axios.get("https://rickandmortyapi.com/api/character");
let {data: {results}} = response; // Almacenamos el result de JSon
let characters = results.map((character)=>{  //Mapeamos para devolver los datos que requerimos
    return{
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species
    };
}).map((character) => Object.values(character).join(","))
.join("\n"); //Convertimos el array devuelto a un string
console.log(path.join(__dirname, "data.csv"));

await fs.writeFile(path.join(__dirname, "data.csv"), characters); //Alamcenamos el string en un archivo CSV

console.log(characters);
}

main();