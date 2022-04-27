//console.log(document.title);

//*******CAMBIA H1**********/
let h1 = document.querySelector('h1');
h1.innerHTML = 'Generasión 1 Pokimon';

/*******2. CAMBIA COLOR FONDO 1GEN POKEMON****/
let primera_gen = document.querySelector('.infocard-list');

primera_gen.style.background = 'lightblue';

/***********3. IMPRIME URL PAGINA*********/

let pokemon_web = document.URL;

console.log(pokemon_web);

/***********4. DOMINIO PÁGINA******* */
let pokemon_domin = document.domain;
console.log(pokemon_domin);

/************5. IMPRIME IMGS********/

let imagenes = document.getElementsByTagName('img');

console.log(imagenes);

/************6. SUSTITUYE SRC IMG******NICOLAS CAGE****/

// for (foto of imagenes) {
//   foto.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
// }

/**************7. PREMIUM**************/

/*****SELECCIONAR SÓLO LAS CLASES QUE NOS INDICA EL EJERCICIO*********/
let voladores = document.querySelectorAll(
  '.infocard-lg-data.text-muted .itype.flying'
);
for (volador of voladores) {
  volador.style.backgroundColor = 'red';
}
//console.log(volador);
//volador.style.backgroundColor = 'orange';
