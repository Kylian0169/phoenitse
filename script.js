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
    .querySelector(".space-button:nth-child(2)")
    .addEventListener("click", () => {
      openPopup(
        "<h2>Nos Cocktails</h2><p>Découvrez nos cocktails rafraîchissants et faits maison !</p>",
      );
    });

  document
    .querySelector(".space-button:nth-child(3)")
    .addEventListener("click", () => {
      openPopup(
        "<h2>Nos Gourmandises</h2><p>Craquez pour nos desserts savoureux et faits avec amour !</p>",
      );
    });
});

document.getElementById("orderForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Empêcher le rechargement de la page

  const formData = new FormData(this);
  const name = formData.get("name");
  const adress = formData.get("adress");
  const numero = formData.get("numero");
  const product = formData.get("product");
  const message = formData.get("message");

  const webhookURL = "https://discord.com/api/webhooks/1335653132247760946/0klK6pV2DH6T2WM7LsZF_Xvdt9piZSrK_YuNNvfV_mC4lsg9aFJ_FPKydFEmeJme3ivl"; //  Webhook

  const payload = {
      content: `📩 **Nouvelle commande reçue !**\n\n👤 **Nom :** ${name}\n🏠 **Adresse :** ${adress}\n📞 **Numéro :** ${numero}\n🛒 **Produit :** ${product}\n📝 **Message :** ${message}`
  };

  try {
      await fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
      });

      alert("Commande envoyée avec succès sur Discord !");
      this.reset();

      window.location.href = "index.html"; // Redirection vers la page d'accueil

  } catch (error) {
      alert("Erreur lors de l'envoi de la commande.");
      console.error("Erreur :", error);
  }
});


