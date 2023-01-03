function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const slider = document.querySelectorAll('.slide-in');  // The image class

function checkSlide() {
    slider.forEach(slider => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - slider.height / 2;
      // bottom of the image
      const imageBottom = slider.offsetTop + slider.height;
      const isHalfShown = slideInAt > slider.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if (isHalfShown && isNotScrolledPast) {
        slider.classList.add('active');
      } else {
        slider.classList.remove('active');
      }
    });
}

  window.addEventListener('scroll', debounce(checkSlide));