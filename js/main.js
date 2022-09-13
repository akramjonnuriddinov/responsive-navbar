const elToggle = document.querySelector('.js-toggle');
const elSitenavClose = document.querySelector('.js-sitenav-close');
const elSitenav = document.querySelector('.js-sitenav');
const elFormSearchIcon = document.querySelector('.js-search-icon');
const elModal = document.querySelector('.modal');
const elModalContent = document.querySelector('.modal__content');
const elModalSearchClose = document.querySelector('.js-modal-search-close');

if(elToggle) {
  elToggle.addEventListener('click', function() {
    elSitenav.classList.add('sitenav--open');
  });
}

if(elSitenavClose) {
  elSitenavClose.addEventListener('click', function() {
    elSitenav.classList.remove('sitenav--open');
  });
}

if(elFormSearchIcon) {
  elFormSearchIcon.addEventListener('click', function() {
    elModal.classList.add('modal--open');
  })
}

if(elModalSearchClose) {
  elModalSearchClose.addEventListener('click', function() {
    elModal.classList.remove('modal--open');
  })
}