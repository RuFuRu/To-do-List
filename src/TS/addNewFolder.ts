export function addNewFolder() {
    const popup = document.querySelector('.pop-up') as HTMLDivElement;
    const popupOverlay = document.querySelector('.pop-up-overlay') as HTMLDivElement;

    const title = document.createElement('h2');
    const textInput = document.createElement('input');
    const submit = document.createElement('button');
    
    title.textContent = "Add a new To-Do Folder";
    textInput.setAttribute('type', 'text');
    submit.textContent = "Submit";

    popup.appendChild(title);
    popup.appendChild(textInput);
    popup.appendChild(submit);

    popup.classList.add('active');
    popupOverlay.classList.add('active');


    submit.addEventListener('click', () => {
        const todoFolder = document.querySelector('.todo-folder') as HTMLUListElement;
        const todoTitle = document.createElement('li');
        todoTitle.textContent = textInput.value;
        todoTitle.classList.add('todo-folder-title');
        todoFolder.appendChild(todoTitle);
    })
}