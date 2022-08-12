export default class ConstrutorElementos{
    constructor(nomeClasse){
        this.classe = nomeClasse
    }
    #titulo(){
        let titulo = document.createElement('div')
        let texto = document.createElement('h1')
        titulo.setAttribute('class', 'super titulo')
        texto.setAttribute('class', 'super titulo texto')
        texto.innerHTML = 'BinGoo'
        titulo.appendChild(texto)
        return titulo
    }
    #pesquisa(){
        let pesquisa = document.createElement('div')
        let campo = document.createElement('input')
        let botao = document.createElement('input')
        pesquisa.setAttribute('class', 'super pesquisa')
        campo.setAttribute('class', 'super pesquisa campo')
        campo.setAttribute('placeholder', 'Pesquisar no Google')
        campo.setAttribute('type', 'search')
        botao.setAttribute('class', 'super pesquisa botao')
        botao.setAttribute('value', 'Pesquisar')
        botao.setAttribute('type', 'button')
        pesquisa.appendChild(campo)
        pesquisa.appendChild(botao)
        return pesquisa
    }
    #estilo(){
        let estilo = document.createElement('div')
        let rotulo = document.createElement('h3')
        let seletor = document.createElement('select')
        estilo.setAttribute('class', 'super estilo')
        rotulo.setAttribute('class', 'super estilo rotulo')
        rotulo.innerHTML = 'Selecione o estilo:'
        seletor.setAttribute('class', 'super estilo seletor')
        seletor.setAttribute('name', 'seletor')
        seletor.setAttribute('title', 'seletor')
        estilo.appendChild(rotulo)
        estilo.appendChild(seletor)
        return estilo
    }
    construir(){
        let container = document.getElementsByClassName(this.classe)[0]
        container.appendChild(this.#titulo())
        container.appendChild(this.#pesquisa())
        container.appendChild(this.#estilo())
    }
}

