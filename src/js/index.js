import {mobileMenuInit} from './parts/mobilemenu';
import {formOverlayInit} from './parts/popupform';
import {seoTextInit} from './parts/seotext';
import SimpleBar from 'simplebar';
import Swiper from 'swiper';
import Plyr from 'plyr';
import IMask from 'imask';
import LazyLoad from 'vanilla-lazyload';

document.addEventListener('DOMContentLoaded', () => {
  mobileMenuInit();
  seoTextInit();
  const form = formOverlayInit();
  new Swiper('.main-slider', {loop: true});
  new Swiper('.products-slider', {
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
  IMask(document.querySelector('input[type=tel]'), {mask: '+{7} (000) 000-00-00'});

  const initPlayer = () => {
    const player = new Plyr('#player', {ratio: '1:1'});
    const controls = document.querySelector('.plyr__controls');
    controls.style.display = 'none';
    player.once('play', () => controls.style.display = 'flex');
  }

  if(document.documentElement.clientWidth > 768) {
    $('#pagepiling').pagepiling({
      normalScrollElements: '#aboutScroll',
      normalScrollElementTouchThreshold: 7,
      onLeave: (index, next) => {
        if(next === 2) {
          new LazyLoad({
            elements_selector: ".lazy2"
          });
        }
        if(next === 3) {
          new LazyLoad({
            elements_selector: ".lazy3"
          });
        }
        if(next === 4) {
          new LazyLoad({
            elements_selector: "#player",
            callback_finish: initPlayer
          });
        }
      }
    });
  }
  if(document.documentElement.clientWidth <= 768) {
    new LazyLoad({
      elements_selector: "#player",
      callback_finish: initPlayer
    });
    new LazyLoad({
      elements_selector: ".lazy2"
    });
    new LazyLoad({
      elements_selector: ".lazy3"
    });
  }

  //For MODX
  $(document).on('af_complete', function(event, response) {
    if(response.success) {
        form.close();
    }
  });
});