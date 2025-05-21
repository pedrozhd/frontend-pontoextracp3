const time = document.getElementById('stopwatch')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let segundos = 0
let intervalId = null

start.addEventListener('click', () => {
    iniciar()
})

stop.addEventListener('click', () => {
    parar()
})

reset.addEventListener('click', () => {
    zerar()
})

document.addEventListener('keydown', (evento) => {
    if (evento.code === 'Space' || evento.key === ' ') {
        evento.preventDefault;

        if (!intervalId) {
            iniciar()
        } else {
            parar()
        }
    }
})

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'z') {
        evento.preventDefault;
        zerar()
    }
})

updateTime()

function iniciar() {
    if (intervalId) return;

    intervalId = setInterval(() => {
        segundos++
        updateTime()
    }, 1000)

}

function parar() {
    clearInterval(intervalId)
    intervalId = null
}

function zerar() {
    parar()
    segundos = 0
    updateTime()
}

function updateTime() {
    const hours = Math.floor(segundos / 3600)
    const minutes = Math.floor((segundos % 3600) / 60)
    const seconds = segundos % 60

    time.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}