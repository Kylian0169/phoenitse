let currentSlide = 0;

function slide(direction) {
  const slider = document.querySelector('.slider');
  const totalBanners = slider.children.length;
  const bannersPerView = 3;

  // Calculate the max slide index
  const maxSlideIndex = totalBanners - bannersPerView;

  // Update the slide position
  currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlideIndex);
  
  const offset = currentSlide * -100 / bannersPerView; // Adjust for 3 banners
  slider.style.transform = `translateX(${offset}%)`;
}

function showTab(index) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
}
