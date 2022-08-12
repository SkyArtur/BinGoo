class IdsForSelection{
    constructor(superClassName){
        this.all = document.getElementsByClassName(superClassName)
        this.ids = ['', 'dark', 'clear', 'red']
    }
    setIds(value){
        if (value != 0){
            let id = this.ids[value]
            for(let i = 0; i < this.all.length; i++){
                this.all[i].setAttribute('id', id)
            }
        }else{
            for(let i = 0; i < this.all.length; i++){
                this.all[i].removeAttribute('id')
            }
        }
    }
}
export default class SelectorConstructor{
    constructor(subClassName){
        this.selector = document.getElementsByClassName(subClassName)[0]
        this.options = ['Default', 'Dark', 'Clear', 'Red']
    }
    build(){
        for(var i = 0; i < this.options.length; i++){
            let option = document.createElement('option')
            option.setAttribute('value', `${i}`)
            option.innerHTML = `${this.options[i]}`
            this.selector.appendChild(option)
        }
    }
    run(superClassName){
        this.selector.addEventListener('change', () => {
           let def_ids = new IdsForSelection(superClassName)
           def_ids.setIds(this.selector.value)
        })
    }
}