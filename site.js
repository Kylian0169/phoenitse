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


function showTab(tabId) {
  // Cacher tous les onglets
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Afficher l'onglet sélectionné
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add('active');
}

// Afficher l'onglet "actu" par défaut
document.addEventListener("DOMContentLoaded", () => {
  showTab('actu');
});
