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

const siguiente = () => {
    if (turnoActual >= 0) {
        turnoActual = turnoActual + 1;
        ActualizarTurno()
    }
}

const anterior = () => {
    if (turnoActual > 0) {
        turnoActual = turnoActual - 1;
        ActualizarTurno();
    }
}

const reset = () => {
    turnoActual = 0;
    ActualizarTurno();
}

const turno = () => {
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
}

document.addEventListener('DOMContentLoaded', () => {
    if (BotonSiguiente instanceof HTMLButtonElement) {
        BotonSiguiente.addEventListener("click", siguiente);
    }

    if (BotonAnterior instanceof HTMLButtonElement) {
        BotonAnterior.addEventListener("click", anterior);
    }

    if (Reset instanceof HTMLButtonElement) {
        Reset.addEventListener("click", reset);
    }

    if (botonTurno instanceof HTMLButtonElement) {
        botonTurno.addEventListener("click", turno);
    }

    ActualizarTurno();
})