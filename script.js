let currentSlide = 0;

function slide(direction) {
  const slider = document.querySelector(".slider");
  const totalBanners = slider.children.length;
  const bannersPerView = 3;

  // Calculate the max slide index
  const maxSlideIndex = totalBanners - bannersPerView;

  // Update the slide position
  currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlideIndex);

  const offset = (currentSlide * -100) / bannersPerView; // Adjust for 3 banners
  slider.style.transform = `translateX(${offset}%)`;
}

function showTab(index) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
  });
}

function showTab(tabId) {
  // Cacher tous les onglets
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Afficher l'onglet sélectionné
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add("active");
}

// Afficher l'onglet "actu" par défaut
document.addEventListener("DOMContentLoaded", () => {
  showTab("actu");
});

function openPopup(content) {
  const popup = document.getElementById("popup");
  const popupBody = document.getElementById("popup-body");

  // Remplir le contenu de la popup
  popupBody.innerHTML = content;

  // Afficher la popup
  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Écouteurs pour les boutons "Nos cocktails" et "Nos gourmandises"
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".space-button:nth-child(3)")
    .addEventListener("click", () => {
      openPopup(
        "<h2>Nos Cocktails</h2><p>Découvrez nos cocktails rafraîchissants et faits maison !</p>",
      );
    });

  document
    .querySelector(".space-button:nth-child(4)")
    .addEventListener("click", () => {
      openPopup(
        "<h2>Nos Gourmandises</h2><p>Craquez pour nos desserts savoureux et faits avec amour !</p>",
      );
    });

  document
    .querySelector(".space-button:nth-child(2)")
    .addEventListener("click", () => {
      openPopup("<h2>Uber EATSE</h2><p>Commandez à graille :D</p>");
    });
});
