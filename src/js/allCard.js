import menuArry from './menu.json';
import menuTemplate from '../templates/template';
import { LIGHT, DARK } from './config';

const listUl = document.querySelector('ul.js-menu');
const switchLN = document.querySelector('#theme-switch-toggle');
const bodyClass = document.querySelector('body');

const savedSettings = localStorage.getItem('checkedNow');

if (JSON.parse(savedSettings)) {
    switchLN.checked = JSON.parse(savedSettings);
    bodyClass.classList.add(DARK)
}

const menuTemplateNode = menuTemplate({ menuArry });
listUl.insertAdjacentHTML('afterbegin', menuTemplateNode);

switchLN.addEventListener(`change`, switchBoody);

function switchBoody() {
 
    if (switchLN.checked) {
        bodyClass.classList.remove(LIGHT);
        bodyClass.classList.add(DARK)

    } else {
        bodyClass.classList.remove(DARK);
        bodyClass.classList.add(LIGHT);
    }

    localStorage.setItem('checkedNow', switchLN.checked);
}











