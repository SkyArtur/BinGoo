import ElementBuilder from "./modules/elements.js";
import Selector from "./modules/selector.js";
import { searchingCommands } from "./modules/search.js";

function setCSSLink(){
    let link = document.createElement('link');
    link.setAttribute('href', '/css/style.css');
    link.setAttribute('rel', 'stylesheet');
    document.head.appendChild(link);
}
function buidContainer(){
    let container = document.createElement('div');
    container.setAttribute('class', 'super container');
    document.body.appendChild(container);
}

window.addEventListener('load', () =>{
    setCSSLink()
    buidContainer()
    new ElementBuilder('container').build()
    new Selector('selector').build()
    new Selector('selector').run('super')
    searchingCommands('search')
})