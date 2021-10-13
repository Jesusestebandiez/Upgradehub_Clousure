let Hola
function Pokehola(pokemon) {
    let Hola = 'Hola'
    return function () {
        console.log('Mi tipo de pokemon es: ' + pokemon + hola)
    }   
}

let pokemonAgua = Pokehola('Blastoise');
let pokemonFuego = Pokehola('Charizard');
let pokemonElectrico = Pokehola('Pikachu');

// Comprobación del clousure
pokemonElectrico();
pokemonFuego();
pokemonAgua();