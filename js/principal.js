/* 1º import*/
import ConstrutorElementos from "./modulos/elementos.js";
/* 2º import*/
import ConstrutorSeletor from "./modulos/seletor.js"
/* 3º import*/
import { comandosDePesquisa } from "./modulos/pesquisa.js"


/* 1ª coisa Fazer as Funções adionarLinkCss() criarContainer()*/
function adionarLinkCss(){
    let link = document.createElement('link')
    link.setAttribute('href', '/css/estilo.css')
    link.setAttribute('rel', 'stylesheet')
    document.head.appendChild(link)
}
function criarContainer(){
    let container = document.createElement('div')
    container.setAttribute('class', 'super container')
    document.body.appendChild(container)
}

window.addEventListener('load', adionarLinkCss())
window.addEventListener('load', criarContainer())

/* 2ª coisa Fazer a classe ConstrutorElementos(nomeClasse) em elementos.js*/
window.addEventListener('load', new ConstrutorElementos('container').construir())

/* 3ª coisa Fazer a classe ConstrutorSeletor(nomeClasse) em seletor.js*/
window.addEventListener('load', new ConstrutorSeletor('seletor').construir())
window.addEventListener('load', new ConstrutorSeletor('seletor').executar('super'))

/* 4ª coisa Fazer a classe ComandosDePesquisa(nomeClasse) em pesquisa.js*/
window.addEventListener('load', comandosDePesquisa('pesquisa'))