import ElementBuilder from "./modules/getElements.js";
import SelectorConstructor from "./modules/getSelector.js";
import { researcherCommands } from "./modules/getResearcher.js";

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
    new SelectorConstructor('selector').build()
    new SelectorConstructor('selector').run('super')
    researcherCommands('search')
})