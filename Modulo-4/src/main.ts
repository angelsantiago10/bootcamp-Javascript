let turnoActual: number = 0;


const BotonAnterior = document.getElementById("BotonAnterior");
const BotonSiguiente = document.getElementById("BotonSiguiente");
const Reset = document.getElementById("Reset");
const cuadroTurno = document.getElementById("cuadroTurno");
const botonTurno = document.getElementById("botonTurno");


function ActualizarTurno() {
    const Display = document.getElementById("Display");
    if (Display && Display instanceof HTMLDivElement) {
    const turnoFormateado = turnoActual.toString().padStart(2, `0`);
    Display.innerHTML = `Turno: ${turnoFormateado}`;
    }
}

if (BotonSiguiente instanceof HTMLButtonElement) {
    BotonSiguiente.addEventListener("click", () => {
        if (turnoActual >= 0) {
            turnoActual = turnoActual + 1;
            ActualizarTurno()
        }
    });
}

if (BotonAnterior instanceof HTMLButtonElement) {
    BotonAnterior.addEventListener("click", () => {
        if (turnoActual > 0) {
            turnoActual = turnoActual - 1;
            ActualizarTurno();
        }
    });
}

if (Reset instanceof HTMLButtonElement) {
    Reset.addEventListener("click", () => {
        turnoActual = 0;
        ActualizarTurno();
    });
}

if (botonTurno instanceof HTMLButtonElement) {
    botonTurno.addEventListener("click", () => {
        if (cuadroTurno instanceof HTMLInputElement) {
        const nuevoTurno = parseInt(cuadroTurno.value);
    
        if (!isNaN(nuevoTurno) &&
            nuevoTurno >= 0) {
            turnoActual = nuevoTurno;
            ActualizarTurno();
            } else {
                alert("Por favor, ingrese un valor válido");
            }
            cuadroTurno.value = '';
        }
    });
}

ActualizarTurno();
