import menuArry from './menu.json';
import menuTemplate from '../templates/template';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const listUl = document.querySelector('ul.js-menu');
const switchLN = document.querySelector('#theme-switch-toggle');
const bodyClass = document.querySelector('body');

const savedSettings = localStorage.getItem('checkedNow');

if (JSON.parse(savedSettings)) {
    switchLN.checked = JSON.parse(savedSettings);
    bodyClass.classList.add(Theme.DARK)
}

const menuTemplateNode = menuTemplate({ menuArry });
listUl.insertAdjacentHTML('afterbegin', menuTemplateNode);

switchLN.addEventListener(`change`, switchBoody);

function switchBoody() {
 
    if (switchLN.checked) {
        bodyClass.classList.remove(Theme.LIGHT);
        bodyClass.classList.add(Theme.DARK)

    } else {
        bodyClass.classList.remove(Theme.DARK);
        bodyClass.classList.add(Theme.LIGHT);
    }

    localStorage.setItem('checkedNow', switchLN.checked);
}











