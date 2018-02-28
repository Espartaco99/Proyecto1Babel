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
       
        const ABOUT= this.vista.oImports['about']
        const ABOUTELEM = ABOUT.querySelector(`[title='about']`)
        ABOUTELEM.content.querySelector('#linkAutores').addEventListener('click',this.ocultarMostrar.bind(this),false)
        ABOUTELEM.content.querySelector('#formulario').style.display='none'
        ABOUTELEM.content.querySelector('#datosEnviados').style.display='none'
        this._cargarTemplate('about')
    }
    menuItems(oEv){
        this._cargarTemplate(oEv.target.title)
        oEv.preventDefault()
    }
    _cargarTemplate(id){
        const IMPORT = this.vista.oImports[id]
        const ELEM = IMPORT.querySelector(`[title=${id}]`)
        this.vista.eMain.innerHTML = ELEM.innerHTML
    }
    ocultarMostrar(oEV){
        console.log('HOLA ABOUT')
        oEv.preventDefault()
        document.getElementById("autores_container").style.visibility="collapse"
    }
}

document.querySelector("#botonMenu").addEventListener("click", desplegarMenu, false)

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
