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

    time.style.background = 'linear-gradient(to bottom, #39ee61, #28a745, #135221)'
    time.style.color = 'white'
}

function parar() {
    clearInterval(intervalId)
    intervalId = null

    time.style.background = 'linear-gradient(to bottom,rgb(253, 26, 49),rgb(161, 10, 25),rgb(92, 2, 11))'
    time.style.color = 'white'
}

function zerar() {
    parar()
    segundos = 0
    updateTime()

    time.style.background = 'linear-gradient(to bottom, #4ca0fa,rgb(0, 75, 155), #002b59)'
    time.style.color = 'white' 
}

function updateTime() {
    const hours = Math.floor(segundos / 3600)
    const minutes = Math.floor((segundos % 3600) / 60)
    const seconds = segundos % 60

    time.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}