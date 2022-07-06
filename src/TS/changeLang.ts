export function changeLang() {
    const popup = document.querySelector('.pop-up') as HTMLDivElement;
    const popupOverlay = document.querySelector('.pop-up-overlay') as HTMLDivElement;

    popup.classList.add('active');
    popupOverlay.classList.add('active');
}