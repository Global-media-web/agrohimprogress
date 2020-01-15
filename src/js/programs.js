import { mobileMenuInit } from './parts/mobilemenu';
import {seoTextInit} from './parts/seotext';

document.addEventListener("DOMContentLoaded", function (event) {
    mobileMenuInit();
    seoTextInit();
    const show_more_btn = document.querySelector('.show-more__btn');
    const parent_offset_height = document.querySelector('.programm-items').offsetHeight;
    if(show_more_btn) {
      show_more_btn.addEventListener('click', e => {
        show_more_btn.textContent = show_more_btn.textContent == "Далее" ? "Назад" : "Далее";
        let programms_parent = document.querySelector('.programm-items');
        programms_parent.style.maxHeight = programms_parent.style.maxHeight == `${programms_parent.scrollHeight}px` ? `${parent_offset_height}px` : `${programms_parent.scrollHeight}px`;
      })
    }
});