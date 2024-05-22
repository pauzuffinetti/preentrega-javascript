class JuegoAdivinanza {
  constructor() {
    const datosGuardados = this.cargarDatos();
    if (datosGuardados) {
      this.numeroAleatorio = datosGuardados.numeroAleatorio;
      this.intentos = datosGuardados.intentos;
    } else {
      this.numeroAleatorio = this.generarNumeroAleatorio(1, 100);
      this.intentos = [];
      this.guardarDatos(); 
    }
    this.init();
    this.mostrarIntentos();
  }

  generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init() {
    const guessButton = document.getElementById('guess-button');
    const userInput = document.getElementById('user-input');

    guessButton.addEventListener('click', () => this.jugar());
    userInput.addEventListener('input', () => this.habilitarBoton());
    userInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.jugar();
      }
    });

    this.habilitarBoton(); 
  }

  habilitarBoton() {
    const userInput = document.getElementById('user-input');
    const guessButton = document.getElementById('guess-button');
    guessButton.disabled = userInput.value === '';
  }

  jugar() {
    const userInput = document.getElementById('user-input');
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');
    const guessButton = document.getElementById('guess-button');

    let intentoUsuario = parseInt(userInput.value);

    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
      message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    } else {
      this.intentos.push(intentoUsuario);
      this.guardarDatos();
      attempts.textContent = `Intentos: ${this.intentos.join(', ')}`;

      if (intentoUsuario < this.numeroAleatorio) {
        message.textContent = "El número es mayor. Probá de nuevo por dios";
      } else if (intentoUsuario > this.numeroAleatorio) {
        message.textContent = "El número es menor. No me hagas enojar.";
      } else {
        message.textContent = `¡Genio, crack, máquina! Adivinaste el número en ${this.intentos.length} intentos. La próxima esforzate un poquito más.`;
        guessButton.disabled = true;
        userInput.disabled = true;
        this.limpiarJuego();
      }
    }

    userInput.value = '';
    this.habilitarBoton(); 
  }

  guardarDatos() {
    const datos = {
      numeroAleatorio: this.numeroAleatorio,
      intentos: this.intentos
    };
    localStorage.setItem('datosJuego', JSON.stringify(datos));
  }

  cargarDatos() {
    const datosGuardados = localStorage.getItem('datosJuego');
    return datosGuardados ? JSON.parse(datosGuardados) : null;
  }

  mostrarIntentos() {
    const attempts = document.getElementById('attempts');
    attempts.textContent = `Intentos: ${this.intentos.join(', ')}`;
  }

  limpiarJuego() {
    localStorage.removeItem('datosJuego');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const juego = new JuegoAdivinanza();
});
