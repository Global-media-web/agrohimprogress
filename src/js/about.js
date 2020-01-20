import { mobileMenuInit } from './parts/mobilemenu';
import SimpleBar from 'simplebar';
import Swiper from 'swiper';
import LazyLoad from 'vanilla-lazyload';
import {seoTextInit} from './parts/seotext';

document.addEventListener("DOMContentLoaded", function (event) {
    mobileMenuInit();
    seoTextInit();
    new SimpleBar(document.getElementById('aboutScroll'));
    const aboutSlider = new Swiper('.about-block__slider', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.about-block-pagination',
            type: 'fraction',
            formatFractionCurrent: function formatFractionCurrent(number) {
                return number > 9 ? number : "O".concat(number);
            },
            currentClass: 'def-slider-pagination__current',
            totalClass: 'def-slider-pagination__total'
        },
        navigation: {
            prevEl: '.about-block-prev',
            nextEl: '.about-block-next'
        }
    });
    const sertSlider = new Swiper('.sertificate-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        pagination: {
            el: '.sert-block-pagination',
            type: 'fraction',
            formatFractionCurrent: function formatFractionCurrent(number) {
                return number > 9 ? number : "O".concat(number);
            },
            currentClass: 'def-slider-pagination__current',
            totalClass: 'def-slider-pagination__total'
        },
        navigation: {
            prevEl: '.sert-block-prev',
            nextEl: '.sert-block-next'
        },
        breakpoints: {
            1170: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    const clientsSlider = new Swiper('.clients-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 64,
        pagination: {
            el: '.clients-block-pagination',
            type: 'fraction',
            formatFractionCurrent: function formatFractionCurrent(number) {
                return number > 9 ? number : "O".concat(number);
            },
            currentClass: 'def-slider-pagination__current',
            totalClass: 'def-slider-pagination__total'
        },
        navigation: {
            prevEl: '.clients-block-prev',
            nextEl: '.clients-block-next'
        },
        breakpoints: {
            1170: {
                slidesPerView: 4,
            },
            980: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    const reviewsSlider = new Swiper('.reviews-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        pagination: {
            el: '.reviews-block-pagination',
            type: 'fraction',
            formatFractionCurrent: function formatFractionCurrent(number) {
                return number > 9 ? number : "O".concat(number);
            },
            currentClass: 'def-slider-pagination__current',
            totalClass: 'def-slider-pagination__total'
        },
        navigation: {
            prevEl: '.reviews-block-prev',
            nextEl: '.reviews-block-next'
        },
        breakpoints: {
            1170: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    new LazyLoad({
        elements_selector: ".lazy"
    });
    $(document).on('click', '.reviews_stars_widget_item', function (e) {
        $('.reviews_stars_widget_item').removeClass('_active');
        $(this).addClass('_active');
        $('input[name="rating"]').attr('value', $(this).data('stars-count'))
    })
});

