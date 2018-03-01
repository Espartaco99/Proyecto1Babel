document.addEventListener('DOMContentLoaded',() => prueba(),false) 
function prueba(){
   document.getElementById("linkAutores").addEventListener("click",desplegar,false)
   document.getElementById("linkFormulario").addEventListener("click",desplegar,false)
   document.getElementById("submit").addEventListener("click",enviarDatos,false)

}
function desplegar(oEv) {
    document.getElementById("linkAutores").classList.toggle('desactivo')
    document.getElementById("linkFormulario").classList.toggle('desactivo')
    document.getElementById("formulario").classList.toggle("oculto")
    document.getElementById("autores_container").classList.toggle("oculto")
    if (!document.getElementById("datosEnviados").classList.contains('oculto')){
        document.getElementById("datosEnviados").classList.toggle('oculto')
        document.getElementById("formulario").classList.toggle('oculto')
   
    }
   
    oEv.preventDefault()
       
}
function enviarDatos(oEv){
    oEv.preventDefault()
    var nombre =   document.getElementById("nombre").value;
    var email =  document.getElementById("email").value;;
    var experienciaDatos = document.querySelectorAll("experiencia").value;;
    var checkbox = document.getElementById("checkbox").value;;
    var opinionDatos = document.getElementById("coment").value;
    console.log(nombre)
    document.getElementById("datosEnviados").classList.toggle('oculto')
    document.getElementById("formulario").classList.toggle('oculto')
    document.getElementById("nombreDatos").innerHTML+=` ${nombre}`
    document.getElementById("emailDatos").innerHTML+=` ${email}`
    document.getElementById("experienciaDatos").innerHTML+=` ${experienciaDatos}`
    document.getElementById("opinionDatos").innerHTML+=` ${opinionDatos}`
    document.getElementById("checkboxDatos").innerHTML+=` ${checkbox}`

}