import ConstrutorElementos from "./modulos/elementos.js";
import ConstrutorSeletor from "./modulos/seletor.js";
import { comandosDePesquisa } from "./modulos/pesquisa.js";

function adionarLinkCss(){
    let link = document.createElement('link');
    link.setAttribute('href', '/css/estilo.css');
    link.setAttribute('rel', 'stylesheet');
    document.head.appendChild(link);
}
function criarContainer(){
    let container = document.createElement('div');
    container.setAttribute('class', 'super container');
    document.body.appendChild(container);
}

window.addEventListener('load', adionarLinkCss());
window.addEventListener('load', criarContainer());
window.addEventListener('load', new ConstrutorElementos('container').construir());
window.addEventListener('load', new ConstrutorSeletor('seletor').construir());
window.addEventListener('load', new ConstrutorSeletor('seletor').executar('super'));
window.addEventListener('load', comandosDePesquisa('pesquisa'));