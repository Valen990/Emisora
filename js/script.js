const audio = document.getElementById('emisora')
const signal = document.getElementById('signal')
const reproduce = document.getElementById('reproducir')
const pausa = document.getElementById('pausar')
const stop = document.getElementById('parar')
const vol = document.getElementById('volume')
const emisoras = document.getElementById('emisoras')

inicializar()
function inicializar(){
    emisoras.value = ""
    signal.style.color = 'red'
    audio.volume = 10 / 100
    reproduce.disabled = true
    pausa.disabled = true
    stop.disabled = true
    vol.disabled = true
}

function cambiarEmisora(event){
    const seleccionada = event.value
    audio.src = seleccionada
    signal.style.color = 'green'
    if(seleccionada.length > 0){
        reproduce.disabled = false
        pausa.disabled = false
        stop.disabled = false
        vol.disabled = false
    } else {
        inicializar()
    }
}

function reproducir(){
    audio.play()
    signal.style.color = 'green'
}

function pausar(){
    audio.pause()
    signal.style.color = 'red'
}

function parar(){
    inicializar()
}

function controlarVolume(event){
    const valorVolume = event.value
    audio.volume = valorVolume / 100
}