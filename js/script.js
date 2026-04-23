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

function controlarContraseña(){
    const passwordInput = document.getElementById("password")
    const eyeIcon = document.querySelector(".eye-icon")

    if(passwordInput.type === "password"){
        passwordInput.type = "text"
        eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>'
    } else {
        passwordInput.type = "password"
        eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
    }
}
