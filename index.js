document.addEventListener('DOMContentLoaded', () => {
    let howBtns = document.querySelectorAll('.services-stages__tabs_item');
    let howContent = document.querySelectorAll('.services-stages__tabs_content');
    if(howBtns) {
        howBtns.forEach(element => {
        element.addEventListener('click', e => {
          const path = e.currentTarget.dataset.path;
          howBtns.forEach(btn => {
            btn.classList.remove('services-stages__active');
          });
          e.currentTarget.classList.add('services-stages__active');
          howContent.forEach(element => {
            element.classList.remove('services-stages__content_active');
          });
          document.querySelector(`[data-target="${path}"]`).classList.add('services-stages__content_active');
        });
      });
    }
    
});