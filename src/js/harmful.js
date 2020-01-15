import {mobileMenuInit} from './parts/mobilemenu';
import {seoTextInit} from './parts/seotext';

document.addEventListener('DOMContentLoaded', () => {
    mobileMenuInit();
    seoTextInit();
    let activeCategory, activeSubCategory;
    document.querySelector('.main-list').addEventListener('click', e => {
        if (e.target.dataset.target === 'main-tab') {
            e.target.classList.add('active');
            const targetList = e.target.nextElementSibling;
            if (activeCategory && activeCategory!==targetList) {
                activeCategory.previousElementSibling.classList.remove('active');
                activeCategory.style.maxHeight = null;
            }
            if (activeSubCategory) {
                activeSubCategory.previousElementSibling.classList.remove('active');
                activeSubCategory.style.maxHeight = null;
            }
            targetList.style.maxHeight = targetList.style.maxHeight ? null : targetList.scrollHeight + 'px';
            activeCategory = targetList;
        } else if (e.target.dataset.target === 'sub-tab') {
            e.target.classList.add('active');
            const targetList = e.target.nextElementSibling;
            if (activeSubCategory && activeSubCategory!==targetList) {
                activeSubCategory.previousElementSibling.classList.remove('active');
                activeSubCategory.style.maxHeight = null;
            }
            activeCategory.style.maxHeight = 'none';
            targetList.style.maxHeight = targetList.style.maxHeight? null : targetList.scrollHeight + 'px';
            activeSubCategory = targetList;
        }
    });
    document.querySelector('.main-list__btn_up').addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
})