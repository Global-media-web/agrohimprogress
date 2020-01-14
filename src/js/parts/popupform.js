export const formOverlayInit = () => {
    const formOverlay = document.querySelector('.popup-form-overlay');
    
    document.querySelector('#popup-form-btn').addEventListener('click', () => {
        formOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
        formOverlay.querySelector('.popup-form__close-btn').addEventListener('click', closeForm)
    });
    const closeForm = () => {
        formOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        formOverlay.querySelector('.popup-form__close-btn').removeEventListener('click', closeForm);
    }

    return {
        close: closeForm
    }
}