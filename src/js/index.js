import {mobileMenuInit} from './parts/mobilemenu';
import {formOverlayInit} from './parts/popupform';
import SimpleBar from 'simplebar';
import Swiper from 'swiper';
import Plyr from 'plyr';
import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
  mobileMenuInit();
  const form = formOverlayInit();
  const mainSlider = new Swiper('.main-slider', {loop: true});
  const productSlider = new Swiper('.products-slider', {
    loop: true,
    pagination: {
      el: '.products-slider-pagination',
      type: 'fraction',
      formatFractionCurrent: number => number > 9 ? number : `0${number}`,
      currentClass: 'products-slider-pagination__current',
      totalClass: 'products-slider-pagination__total'
    },
    navigation: {
      nextEl: '.products-slider-next',
      prevEl: '.products-slider-prev'
    }
  });
  new SimpleBar(document.getElementById('aboutScroll'));
  const player = new Plyr('#player', {ratio: '1:1'});
  const controls = document.querySelector('.plyr__controls');
  controls.style.display = 'none';
  player.once('play', () => controls.style.display = 'flex');
  const mask = IMask(document.querySelector('input[type=tel]'), {mask: '+{7} (000) 000-00-00'});

  if(document.documentElement.clientWidth > 768) {
    $('#pagepiling').pagepiling({
      normalScrollElements: '#aboutScroll',
      normalScrollElementTouchThreshold: 7
    });
  }

  //For MODX
  $(document).on('af_complete', function(event, response) {
    if(response.success) {
        form.close();
    }
  });
});