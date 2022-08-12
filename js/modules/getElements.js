export default class ElementBuilder{
    constructor(className){
        this.classElements = className
    }
    #title(){
        let title = document.createElement('div')
        let text = document.createElement('h1')
        title.setAttribute('class', 'super title')
        text.setAttribute('class', 'super title text')
        text.innerHTML = 'BinGoo'
        title.appendChild(text)
        return title
    }
    #search(){
        let search = document.createElement('div')
        let field = document.createElement('input')
        let buttom = document.createElement('input')
        search.setAttribute('class', 'super search')
        field.setAttribute('class', 'super search field')
        field.setAttribute('placeholder', 'Pesquisar no Google')
        field.setAttribute('type', 'search')
        buttom.setAttribute('class', 'super search button')
        buttom.setAttribute('value', 'Pesquisar')
        buttom.setAttribute('type', 'button')
        search.appendChild(field)
        search.appendChild(buttom)
        return search
    }
    #selector(){
        let style = document.createElement('div')
        let label = document.createElement('h3')
        let selector = document.createElement('select')
        style.setAttribute('class', 'super style')
        label.setAttribute('class', 'super style label')
        label.innerHTML = 'Selecione o estilo:'
        selector.setAttribute('class', 'super style selector')
        selector.setAttribute('name', 'selector')
        selector.setAttribute('title', 'selector')
        style.appendChild(label)
        style.appendChild(selector)
        return style
    }
    build(){
        let container = document.getElementsByClassName(this.classElements)[0]
        container.appendChild(this.#title())
        container.appendChild(this.#search())
        container.appendChild(this.#selector())
    }
}

