export class Main {
    constructor(){
        console.log('Main loaded')
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),
            eArticle : document.querySelector('article'),
            body : document.querySelector('body'),
            eMain : document.querySelector('main'),
            aImports: document.querySelectorAll('link[rel="import"]'),
            oImports: {},
            bMenu:  document.querySelector("#botonMenu")
        }
        this.vista.aBtnsMenu.forEach(element => {
            element.addEventListener('click',this.menuItems.bind(this),false)
        });
      
        this.vista.aImports.forEach(elem=>{
            this.vista.oImports[elem.title]=elem.import
        })
        this._cargarTemplate('home')
        this.vista.bMenu.addEventListener("click", () => this.desplegarMenu(), false)
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
    listenersAbout(){
        document.getElementById("linkAutores").addEventListener("click",this.desplegar.bind(this),false)
        document.getElementById("linkFormulario").addEventListener("click",this.desplegar.bind(this),false)
        document.getElementById("form_1").addEventListener("submit",this.enviarDatos.bind(this),false)
        console.log(document.getElementById("linkAutores"))
        console.log(document.getElementById("linkFormulario"))
        console.log(document.getElementById("submit"))
        console.log("Entre main js")
     
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
        var expregNombre = /[A-Za-z]*/;
        var expregEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;;
        var aRadio = document.getElementsByName("radio");
            for(var i=0; i < aRadio.length; i++) {
                if (aRadio[i].checked) { 
                     var experienciaDatos = aRadio[i].value;
            }
         }
         var checkbox = document.getElementById("checkbox").checked ? "SI" : "NO";		
         var opinionDatos = document.getElementById("coment").value;
         var required = true
         if(!expregNombre.test(nombre)){
            document.getElementById("errorNombre").attributes
             required = false
         }
         if(!expregEmail.test(email)){
             console.log("email introducido")
             required = false
         }
         if(!experienciaDatos){
         }   console.log("experiencia introducido")
         required = false
         if(required){
         localStorage.setItem("nombre",  nombre)
         localStorage.setItem("email",  email)
         localStorage.setItem("experiencia",  experienciaDatos)
         localStorage.setItem("opinion",  opinionDatos)
         localStorage.setItem("recibirNoticias",  checkbox)

       
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
     

     desplegarMenu() {
        document.querySelector("#menu_movil").classList.toggle("oculto")
    }
}


