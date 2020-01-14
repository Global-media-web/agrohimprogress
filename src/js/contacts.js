import { mobileMenuInit } from './parts/mobilemenu';

document.addEventListener("DOMContentLoaded", function (event) {
    mobileMenuInit();
    const mapBtns = document.querySelector('.openMap');
    const txt = mapBtns.querySelector('.btn-text');
    mapBtns.addEventListener('click', function () {
        document.querySelector('.map-info').classList.toggle('inactive');
        txt.textContent = txt.textContent === 'Посмотреть на карте' ? 'Закрыть карту' : 'Посмотреть на карте';
    })
});

