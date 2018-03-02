export class Main {
    constructor(){
        console.log('Main loaded')
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle : document.querySelector('article'),
            body : document.querySelector('body'),
            eMain : document.querySelector('main'),
            aImports: document.querySelectorAll('link[rel="import"]'),
            oImports: {}
        }
        this.vista.aBtnsMenu.forEach(element => {
            element.addEventListener('click',this.menuItems.bind(this),false)
        });
      
        this.vista.aImports.forEach(elem=>{
            this.vista.oImports[elem.title]=elem.import
        })
        this._cargarTemplate('home')
            }
    menuItems(oEv){
        this._cargarTemplate(oEv.target.title)
        oEv.preventDefault()
    }
    _cargarTemplate(id){
        const IMPORT = this.vista.oImports[id]
        const ELEM = IMPORT.querySelector(`[title=${id}]`)
        this.vista.eMain.innerHTML = ELEM.innerHTML
        if(id === 'about')this.listenersAbout()
        
    }
    ocultarMostrar(oEV){
        console.log('HOLA ABOUT')
        oEv.preventDefault()
    }
    listenersAbout(){
        document.getElementById("linkAutores").addEventListener("click",this.desplegar.bind(this),false)
        document.getElementById("linkFormulario").addEventListener("click",this.desplegar.bind(this),false)
        document.getElementById("submit").addEventListener("submit",this.enviarDatos.bind(this),false)
     
    }                
    desplegar(oEv) {
         document.getElementById("linkAutores").classList.toggle('desactivo')
         document.getElementById("linkFormulario").classList.toggle('desactivo')
         document.getElementById("formulario").classList.toggle("oculto")

         document.getElementById("autores_container").classList.toggle("oculto")
         document.querySelector("#autores").classList.toggle("oculto")
         document.querySelector("#contacta").classList.toggle("oculto")
          if (!document.getElementById("datosEnviados").classList.contains('oculto')){ 
             document.getElementById("datosEnviados").classList.toggle('oculto')
             document.getElementById("formulario").classList.toggle('oculto')       
          }        
         oEv.preventDefault()            
     }
     enviarDatos(oEv){
        //var nRe = RegExp('(a-zA-Z)')
        
         var nombre =   document.getElementById("nombre").value;
         var email =  document.getElementById("email").value;;
         var experienciaDatos = document.querySelectorAll("experiencia").value;;
         var checkbox = document.getElementById("checkbox").value;;
         var opinionDatos = document.getElementById("coment").value;
         if(nombre.validity.valid)
         if(email.validity.valid)
         if(experienciaDatos.validity.valid)
         oEv.preventDefault()
         document.getElementById("datosEnviados").classList.toggle('oculto')
         document.getElementById("formulario").classList.toggle('oculto')
         document.getElementById("nombreDatos").innerHTML+=` ${nombre}`
         document.getElementById("emailDatos").innerHTML+=` ${email}`
         document.getElementById("experienciaDatos").innerHTML+=` ${experienciaDatos}`
         document.getElementById("opinionDatos").innerHTML+=` ${opinionDatos}`
         document.getElementById("checkboxDatos").innerHTML+=` ${checkbox}`
         
     }
}

document.querySelector("#botonMenu").addEventListener("click", desplegarMenu, false)
//document.querySelector("#botonMenu").addEventListener('blur', desplegarMenu, false)

function desplegarMenu() {
    document.querySelector("#menu_movil").classList.toggle("oculto")
    /* if(document.querySelector("#menu_movil").classList !== null && document.querySelector("#menu_movil").classList.contains("oculto")){
        document.querySelector("#menu_movil").classList.remove("oculto")
    }
    else {
        document.querySelector("#menu_movil").classList.add("oculto")
    } */
    /* document.querySelector(".a").style.visibility = visible;
    console.log(document.querySelector(".a").style) */
}
