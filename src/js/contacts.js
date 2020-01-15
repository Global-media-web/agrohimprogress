import { mobileMenuInit } from './parts/mobilemenu';
import {seoTextInit} from './parts/seotext';

document.addEventListener("DOMContentLoaded", function (event) {
    mobileMenuInit();
    seoTextInit();
    const mapBtns = document.querySelector('.openMap');
    const txt = mapBtns.querySelector('.btn-text');
    mapBtns.addEventListener('click', function () {
        document.querySelector('.map-info').classList.toggle('inactive');
        txt.textContent = txt.textContent === 'Посмотреть на карте' ? 'Закрыть карту' : 'Посмотреть на карте';
    })
});

