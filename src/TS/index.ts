import * as _ from 'lodash';
import '../Sass/styles.scss';
import { addNewFolder } from './addNewFolder';
import { changeLang } from './changeLang';
import { addNewToDo } from './addNewToDo';
console.log("Oh yea babe!");

const popup = document.querySelector('.pop-up') as HTMLDivElement;
const popupOverlay = document.querySelector('.pop-up-overlay') as HTMLDivElement;
const changeLanguage = document.querySelector('.change-lang') as HTMLParagraphElement;
const addFolder = document.querySelector('.add-folder') as HTMLParagraphElement;
const addTodo = document.querySelector('.add-todo') as HTMLParagraphElement;


changeLanguage.addEventListener('click', changeLang);
addFolder.addEventListener('click', addNewFolder);
addTodo.addEventListener('click', addNewToDo);
popupOverlay.addEventListener('click', hidePopUp);

function hidePopUp() {
    popup.classList.remove('active');
    popup.textContent = '';
    popupOverlay.classList.remove('active');
}



