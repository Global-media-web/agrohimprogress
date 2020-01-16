import { mobileMenuInit } from './parts/mobilemenu';
import { seoTextInit } from './parts/seotext';
import DG from '2gis-maps';

document.addEventListener("DOMContentLoaded", function () {
    mobileMenuInit();
    seoTextInit();
    let left_map_loc = 76.958217;
    switch (window.screen.width) {
        case window.screen.width < 980:
            left_map_loc = 76.956028;
            break;
        case window.screen.width < 480:
            left_map_loc = 76.958474;
            break;
    }
    DG.then(function () {
        const map = DG.map('map', {
            center: [52.389213, left_map_loc],
            zoom: 16,
            zoomControl: true,
            fullscreenControl: true,
        });
        const customIcon = DG.icon({
            iconUrl: '/assets/static/img/icons/map-loc.png',
            iconSize: [46, 61],
            iconAnchor: [46, 61],
            popupAnchor: [-30, 0]
        });
        const popup = DG.popup({ closeButton: false }).setContent('<strong>Наш адрес: </strong><br/><span>Северная промышленная зона, строение 115/1</span>');
        DG.marker([52.389213, 76.959354], { icon: customIcon }).addTo(map).bindPopup(popup);
    });
    const mapBtns = document.querySelector('.openMap');
    const txt = mapBtns.querySelector('.btn-text');
    mapBtns.addEventListener('click', function () {
        document.querySelector('.map-info').classList.toggle('inactive');
        txt.textContent = txt.textContent === 'Посмотреть на карте' ? 'Закрыть карту' : 'Посмотреть на карте';
    })
});

