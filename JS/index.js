'use strict'

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

const crearTabla = () => {

    const contenedor = document.getElementsByClassName('contenedor')[0];

    for (let i = 1; i <= 90; i++) {
        const div = document.createElement('div');
        div.id = i;
        div.textContent = i;
        contenedor.appendChild(div);
      }
    
};
crearTabla();

const bingo = () => {

   let aleatorio;

    do {
        aleatorio = Math.floor(Math.random() * 90) + 1;
    } while (numbers.indexOf(aleatorio) === -1);
   
   numbers.forEach((data, index) => {
        if (aleatorio === data) {
            const div = document.getElementById(`${data}`);
            div.classList.add('verde');
            delete(numbers[index]);
            
            if (aleatorio === 1) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Luis Pitin`;                
                const mensaje = new SpeechSynthesisUtterance();
                mensaje.lang = 'es-ES';              
                mensaje.text =  `Luis pitín, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 2) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Patito Solo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el patito solo, el ${aleatorio}`;                
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 3) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Pata Perro`;
                const mensaje = new SpeechSynthesisUtterance();
                mensaje.lang = 'es-ES';                
                mensaje.text =  `pata perro, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);                
            }
            if (aleatorio === 4) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Cara Gato`;
                const mensaje = new SpeechSynthesisUtterance();
                mensaje.lang = 'es-ES';              
                mensaje.text =  `Cara gato, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 5) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Civil Solo` ;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `El civil solo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 6) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Una Preñada`;
                const mensaje = new SpeechSynthesisUtterance();  
                mensaje.lang = 'es-ES';              
                mensaje.text =  `Una embarazada, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 7) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Alcallata`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la alcallata, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 8) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Bolo De La Carraca`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el bolo de la carraca, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 9) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Cabezon De La Sal`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el cabezón de la sal, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 10) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Pelao Chico`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el pelado chico, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 11) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Las Chimeneas De Armilla`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `las chimeneas de armilla, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 12) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Mediodia, Almorzar`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `Mediodia, almorzar, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 13) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Mal Ramo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el mal ramo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 14) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Locos`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `Los locos, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 15) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Niña Bonita`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la niña bonita, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 16) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El De La Moto`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el de la moto, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 17) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} San Antón`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `san antón, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 18) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Mayor De Edad`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `mayor de edad, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 19) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} San Jose`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `san josé, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 20) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Tio Del Queso`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `un pelado, el tío del queso, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 21) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Primavera`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la primavera, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 22) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Dos Patitos`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `los dos patitos, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 23) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Melón`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el melón, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 24) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} NocheBuena`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `noche buena, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 25) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Un Turrón, Navidad`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `navidad, un turrón, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 26) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Pollos`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `los pollos, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 27) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Peine`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el peine, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 28) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Cara Caqui`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `cara caqui, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 29) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} San Pedro`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `san pedro, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 30) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El León`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `Otro pelado, el león, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 31) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} A Pagar La Casa`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `a pagar la casa, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 32) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Dinerito`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el dinerito, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 33) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Edad de Cristo y Manuel`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la edad de cristo y manuel, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 34) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Garrote`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el garrote, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 35) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Pajarillo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el pajarillo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 36) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Castaña`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la castaña, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 37) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Puñalá`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `que te pincho, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 38) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Perro`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el perro, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 39) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Toro`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el toro, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 40) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Cura`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `Un pelado, el cura, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 41) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Cuchillo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el cuchillo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 42) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Zapatillas`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `zapatillas, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 43) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Corona`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la corona, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 44) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Cuascara Con Cuascara`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `cuáscara con cuáscara, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 45) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Vinito`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el vinito, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 46) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Sombrero`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el sombrero, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 47) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Muerto`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el muerto, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 48) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Negra`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la negra, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 49) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Carne`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la carne, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 50) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Medio Metro`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `otro pelado, medio metro, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 51) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Serrucho`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el serrucho, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 52) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Mamá y El Nene`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la mama y el nene, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 53) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Barco`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el barco, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 54) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Vaca Burra`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la vaca burra, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 55) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Dos Civiles`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `los dos civiles, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 56) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Caida`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la caída, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 57) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Jorobado`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el jorobado, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 58) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Ahogado`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el ahogado, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 59) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Pelele`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el pelele, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 60) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Virgen`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `un pelado, la virgen, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 61) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Cara Culo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `cara culo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 62) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Inundación`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la inundación, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 63) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Casamiento`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `casamiento, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 64) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} EL Llorica`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el llorica, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 65) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Cazador`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `se sientan cinco, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 66) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Las Dos Preñadas`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `las dos preñadas, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 67) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Mobilete`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el mobilete, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 68) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Sobrinos`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `los sobrinos, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 69) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Boca Arriba y Boca Abajo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el erótico, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 70) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Sonámbulo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `un pelado grande, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 71) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Cagao`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el cagado, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 72) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Sorpresa`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `sorpresa, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 73) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Hospital`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el hospital, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 74) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Escalera`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la escalera, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 75) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Se Acabó`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `se acabó, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 76) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Las Llamas`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `las llamas, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 77) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Las Dos Alcallatas`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `las dos alcallatas, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 78) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Ramera`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la ramera, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 79) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Ladrón`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el ladrón, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 80) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Bocha`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `y otro pelado, la bocha, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 81) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Las Flores`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `las flores, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 82) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Peleita`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la peleita, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 83) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Mal Tiempo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el mal tiempo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 84) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Obispo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el obispo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 85) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Linterna`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la linterna, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 86) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Humillo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el humillo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 87) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Piojos`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `los piojos, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 88) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} Los Bolos De La Carraca`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `los bolos de la carraca, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 89) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} La Gambita`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `la gambita, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }
            if (aleatorio === 90) {
                const comentario = document.getElementById('comentario');
                comentario.textContent = `${aleatorio} El Abuelo`;
                const mensaje = new SpeechSynthesisUtterance(); 
                mensaje.lang = 'es-ES';               
                mensaje.text =  `el abuelo, el ${aleatorio}`;
                mensaje.rate = 0.7;
                window.speechSynthesis.speak(mensaje);
            }


            
        }

   });
   //console.log(numbers);
};