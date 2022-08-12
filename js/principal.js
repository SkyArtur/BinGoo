import ConstruitorElementos from "./modulos/elementos.js";
import { comandosDePesquisa } from "./modulos/pesquisa.js"
import ConstrutorSeletor from "./modulos/seletor.js"

function adionarLinkCss(){
    let link = document.createElement('link')
    link.setAttribute('href', '/css/estilo.css')
    link.setAttribute('rel', 'stylesheet')
    document.head.appendChild(link)
}

window.addEventListener('load', adionarLinkCss())
window.addEventListener('load', new ConstruitorElementos('container').construir())
window.addEventListener('load', new ConstrutorSeletor('seletor').construir())
window.addEventListener('load', new ConstrutorSeletor('seletor').executar('super'))
window.addEventListener('load', comandosDePesquisa('pesquisa'))