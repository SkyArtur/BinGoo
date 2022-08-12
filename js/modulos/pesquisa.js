class ComandosDePesquisa{
    constructor(nomeClasse){
        this.campo = document.getElementsByClassName(nomeClasse)[1]
        this.botao = document.getElementsByClassName(nomeClasse)[2]
    }
    comandoProcurar(){
        window.open(`https://www.google.com/search?q=${this.campo.value}`, '_blank')
        this.campo.value = ''
    }
    detectarClickBotao(){
        this.botao.addEventListener('click', () => {
            return this.comandoProcurar()
        })
    }
    detectarTeclaEnter(){
        this.campo.addEventListener('keypress', (event) => {
            if(event.key === 'Enter'){
                this.comandoProcurar()
            }
        })
    }
}
function comandosDePesquisa(nomeClasse){
    let comandos = new ComandosDePesquisa(nomeClasse)
    comandos.detectarClickBotao()
    comandos.detectarTeclaEnter()
}

export { comandosDePesquisa }