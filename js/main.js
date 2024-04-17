function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function jugarAdivinanza() {
    const numeroAleatorio = generarNumeroAleatorio(1, 100);
    let intentos = 0;
    let intentoUsuario;
  
    alert("Bienvenido al juego de adivinanza. Adiviná un número entre 1 y 100.");
  
    do {
      intentoUsuario = parseInt(prompt("Introducí un número:"));
  
      if (isNaN(intentoUsuario)) {
        alert("Ese número no es válido campeón, intentá de nuevo");
      } else {
        intentos++;
  
        if (intentoUsuario < numeroAleatorio) {
          alert("El número es mayor. Intenta de nuevo.");
        } else if (intentoUsuario > numeroAleatorio) {
          alert("El número es menor. Intenta de nuevo.");
        } else {
          alert(`Genio, crack! Adivinaste el número en ${intentos} intentos. La próxima esforzate un poquito más.`);
        }
      }
    } while (intentoUsuario !== numeroAleatorio);
  
  }

  jugarAdivinanza();