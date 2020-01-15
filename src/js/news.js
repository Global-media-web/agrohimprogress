import { mobileMenuInit } from './parts/mobilemenu';
import {seoTextInit} from './parts/seotext';

document.addEventListener("DOMContentLoaded", function (event) {
    mobileMenuInit();
    seoTextInit();
    const show_more_btn = document.querySelector('.news-list');
    if (show_more_btn) {
        document.querySelectorAll('.news-desc').forEach(el => {
            el.style.maxHeight = "90px";
        })
        show_more_btn.addEventListener('click', e => {
            let tt = e.target;
            if (tt.classList.contains('read_more')) {
                tt.innerHTML = tt.innerHTML == "Подробнее" ? "Скрыть" : "Подробнее";
                let parent_news = tt.closest('.single-news'),
                    desc_itself = parent_news.querySelector('.news-desc');
                desc_itself.style.maxHeight = desc_itself.style.maxHeight != `90px` ? '90px' : `${desc_itself.scrollHeight}px`;
            }
        })
    }
    $(document).on('pdopage_load', function(e, config, response) {
      const pageCounter = document.querySelector('#counter');
      pageCounter.textContent = response.pages;
     });
})