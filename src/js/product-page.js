import {mobileMenuInit} from './parts/mobilemenu';
import {formOverlayInit} from './parts/popupform';
import {seoTextInit} from './parts/seotext';
import SimpleBar from 'simplebar';
import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
  mobileMenuInit();
  seoTextInit();
  const form = formOverlayInit();
  new SimpleBar(document.getElementById('descScroll'));
  let activeCategory = document.querySelector('.main-list__item.active');

  document.querySelector('.main-list').addEventListener('click', e => {
      if (e.target.classList.contains('main-list__link')) {
          e.preventDefault();
          const parent = e.target.closest('.main-list__item');
          if (activeCategory !== parent) {
              parent.classList.add('active');
              activeCategory.classList.remove('active');
              const inList = parent.querySelector('.sub-list');
              const outList = activeCategory.querySelector('.sub-list')
              inList.style.maxHeight = inList.scrollHeight + 'px';
              outList.style.maxHeight = '0px';
              activeCategory = parent;
          }
      }
  });

  const specArea = document.querySelector('.product-spec');
  if(specArea) {
    specArea.addEventListener('click', e => {
      if (e.target.classList.contains('product-spec__btn') && !e.target.classList.contains('active')) {
          const prevBtn = document.querySelector('.product-spec__btn.active');
          const targetBlock = e.target.nextElementSibling;
          e.target.classList.add('active');
          targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
          if (prevBtn) {
              prevBtn.classList.remove('active');
              prevBtn.nextElementSibling.style.maxHeight = null;
          }
        }
    });
  }

  const mask = IMask(document.querySelector('input[type=tel]'), {mask: '+{7} (000) 000-00-00'});

  const catalogMenu = document.querySelector('.catalog-menu');
  document.querySelector('#mobile-catalog-btn').addEventListener('click', () => {
    catalogMenu.classList.add('mobile-active');
    catalogMenu.querySelector('.mobile-close-btn').addEventListener('click', closeCatalog);
  });
  const closeCatalog = () => {
    catalogMenu.classList.remove('mobile-active');
    catalogMenu.querySelector('.mobile-close-btn').removeEventListener('click', closeCatalog);
  }

  // For MODX
  $(document).on('af_complete', function(event, response) {
    if(response.success) {
        form.close();
    }
  });
});