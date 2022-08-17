class SearchingCommands{
    constructor(className){
        this.elements = document.getElementsByClassName(className)
        this.field = this.elements[1]
        this.button = this.elements[2]
    }
    commandSearch(){
        window.open(`https://www.google.com/search?q=${this.field.value}`, '_blank')
        this.field.value = ''
    }
    detectClick(){
        this.button.addEventListener('click', () => {
            return this.commandSearch()
        })
    }
    detectEnter(){
        this.field.addEventListener('keypress', (event) => {
            if(event.key === 'Enter'){
                this.commandSearch()
            }
        })
    }
}
function searchingCommands(className){
    let commands = new SearchingCommands(className)
    commands.detectClick()
    commands.detectEnter()
}
export { searchingCommands }