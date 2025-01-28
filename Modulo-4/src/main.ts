let turnoActual: number = 0;

const Display = document.getElementById("Display") as HTMLInputElement;
const BotonAnterior = document.getElementById("BotonAnterior") as HTMLButtonElement;
const BotonSiguiente = document.getElementById("BotonSiguiente") as HTMLButtonElement;
const Reset = document.getElementById("Reset") as HTMLButtonElement;
const cuadroTurno = document.getElementById("cuadroTurno") as HTMLInputElement;
const botonTurno = document.getElementById("botonTurno") as HTMLButtonElement;

function ActualizarTurno() {
    const turnoFormateado = turnoActual.toString().padStart(2, `0`);
    Display.innerHTML = `Turno: ${turnoFormateado}`;
}

BotonSiguiente?.addEventListener("click", () => {
    turnoActual = turnoActual + 1;
    ActualizarTurno();
});

BotonAnterior?.addEventListener("click", () => {
    if (turnoActual > 0) {
        turnoActual = turnoActual - 1;
        ActualizarTurno();
    }
});

Reset?.addEventListener("click", () => {
    turnoActual = 0;
    ActualizarTurno();
});

botonTurno.addEventListener("click", () => {
    const nuevoTurno = parseInt(cuadroTurno.value);

    if (!isNaN(nuevoTurno) &&
        nuevoTurno >= 0) {
        turnoActual = nuevoTurno;
        ActualizarTurno();
        } else {
            alert("Por favor, ingrese un valor válido");
        }
        cuadroTurno.value = '';
});

ActualizarTurno();
