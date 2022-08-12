import ElementBuilder from "./modules/getElements.js";
import SelectorConstructor from "./modules/getChanger.js";
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

window.addEventListener('load', setCSSLink());
window.addEventListener('load', buidContainer());
window.addEventListener('load', new ElementBuilder('container').buildUp());
window.addEventListener('load', new SelectorConstructor('selector').buildUp());
window.addEventListener('load', new SelectorConstructor('selector').run('super'));
window.addEventListener('load', researcherCommands('search'));