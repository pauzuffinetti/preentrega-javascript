class JuegoAdivinanza {
  constructor() {
    this.numeroAleatorio = this.generarNumeroAleatorio(1, 100);
    this.intentos = [];
  }

  generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  jugar() {
    alert("Welcome to the jueguito. Adiviná un número entre 1 y 100");

    do {
      let intentoUsuario = parseInt(prompt("Introducí un número:"));

      if (isNaN(intentoUsuario)) {
        alert("Ese número no es válido campeón, intentá de nuevo");
      } else {
        this.intentos.push(intentoUsuario);

        if (intentoUsuario < this.numeroAleatorio) {
          alert("El número es mayor. Probá de nuevo por dios");
        } else if (intentoUsuario > this.numeroAleatorio) {
          alert("El número es menor. No me hagas enojar.");
        } else {
          alert(`¡Genio, crack, máquina! Adivinaste el número en ${this.intentos.length} intentos. La próxima esforzate un poquito más.`);
        }
      }
    } while (intentoUsuario !== this.numeroAleatorio);
  }

  obtenerUltimoIntento() {
    return this.intentos[this.intentos.length - 1];
  }

  obtenerTodosLosIntentos() {
    return this.intentos;
  }
}

const juego = new JuegoAdivinanza();
juego.jugar();
