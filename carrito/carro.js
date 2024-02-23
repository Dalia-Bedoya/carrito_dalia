var fondo = document.querySelector(".contenedor")
var rueda = document.querySelector(".ruedas")
var rueda2 = document.querySelector(".ruedas2")
var luz = document.querySelector(".luz")
var humo = document.querySelector(".humo")

fondo.addEventListener('click', mover)
function mover(){
    fondo.classList.add('fondomover')
    rueda.classList.add('ruedasmover')
    rueda2.classList.add('ruedasmover2')
    luz.classList.remove('oculto')
    humo.classList.remove('oculto')
    luz.classList.add('luzmover')
    humo.classList.add('humomover')
}