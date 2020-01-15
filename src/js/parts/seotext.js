export const seoTextInit = () => {
    const btn = document.getElementById('seoBtn');
    const text = document.getElementById('seoTxt');
    if(btn) {
        btn.addEventListener('click', () => {
            text.classList.toggle('active');
            btn.textContent = btn.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее';
        })
    }
}