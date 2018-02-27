import { Main } from './main.js'

(function(){
   document.addEventListener('DOMContentLoaded',() => new Main(),false) 
})()

document.querySelector("#botonMenu")
document.addEventListener("click", desplegarMenu, false)

function desplegarMenu() {
    document.querySelector("#menu_movil").style.visibility = visible;
}