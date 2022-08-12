class IdsParaSelecao{
    constructor(nomeSuperClasse){
        this.todosElementos = document.getElementsByClassName(nomeSuperClasse)
        this.ids = ['', 'escuro', 'claro', 'vermelho']
    }
    definirId(value){
        if (value != 0){
            let id = this.ids[value]
            for(let i = 0; i < this.todosElementos.length; i++){
                this.todosElementos[i].setAttribute('id', id)
            }
        }else{
            for(let i = 0; i < this.todosElementos.length; i++){
                this.todosElementos[i].removeAttribute('id')
            }
        }
    }
}
export default class ConstrutorSeletor{
    constructor(nomeSubClasse){
        this.seletor = document.getElementsByClassName(nomeSubClasse)[0]
        this.opcaoSeletor = ['Padão', 'Escuro', 'Claro', 'Vermelho']
    }
    construir(){
        for(var i = 0; i < this.opcaoSeletor.length; i++){
            let opcao = document.createElement('option')
            opcao.setAttribute('value', `${i}`)
            opcao.innerHTML = `${this.opcaoSeletor[i]}`
            this.seletor.appendChild(opcao)
        }
    }
    executar(nomeSuperClasse){
        this.seletor.addEventListener('change', () => {
           let def_ids = new IdsParaSelecao(nomeSuperClasse)
           def_ids.definirId(this.seletor.value)
        })
    }
}