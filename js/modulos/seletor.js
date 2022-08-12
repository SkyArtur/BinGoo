class MudarCor{
    constructor(nomeSuperClasse){
        this.app = document.getElementsByClassName(nomeSuperClasse)
        this.opcao = ['', 'escuro', 'claro', 'vermelho']
    }
    definirCor(value){
        if (value != 0){
            let id = this.opcao[value]
            for(let i = 0; i < this.app.length; i++){
                this.app[i].setAttribute('id', id)
            }
        }else{
            for(let i = 0; i < this.app.length; i++){
                this.app[i].removeAttribute('id')
            }
        }
    }
}

export default class ConstrutorSeletor{
    constructor(nomeClasse){
        this.elementos = document.getElementsByClassName(nomeClasse)[0]
        this.cores = ['Padão', 'Escuro', 'Claro', 'Vermelho']
    }
    construir(){
        for(var i = 0; i < this.cores.length; i++){
            let opcao = document.createElement('option')
            opcao.setAttribute('value', `${i}`)
            opcao.innerHTML = `${this.cores[i]}`
            this.elementos.appendChild(opcao)
        }
    }
    executar(nomeSuperClasse){
        this.elementos.addEventListener('change', () => {
           let mudar = new MudarCor(nomeSuperClasse)
           mudar.definirCor(this.elementos.value)
        })
    }
}