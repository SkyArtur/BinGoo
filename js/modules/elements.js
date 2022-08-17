export default class ElementBuilder{
    constructor(className){
        this.classElements = className
    }
    #title(){
        let title = document.createElement('div')
        title.setAttribute('class', 'super title')
        title.innerHTML = '<h1 class="super title text">BinGoo</h1>'
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
        let selector = document.createElement('select')
        style.setAttribute('class', 'super style')
        selector.setAttribute('class', 'super style selector')
        selector.setAttribute('name', 'selector')
        selector.setAttribute('title', 'selector')
        style.innerHTML = '<h3 class="super style label">Selecione o estilo:</h3>'
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

