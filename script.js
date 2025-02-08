let currentSlide = 0;

function slide(direction,wScreen) {
  const slider = document.querySelector(".slider");
  const totalBanners = slider.children.length;
  let bannersPerView = 3;
  let offsetpixel = 40;
  if(wScreen < 800) {
    offsetpixel = 70;
    bannersPerView = 1;
    
  }
  



  // Calculate the max slide index
  const maxSlideIndex = totalBanners - bannersPerView;

  // Update the slide position
  currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlideIndex);

  const offset = (currentSlide  *- offsetpixel) / bannersPerView; // Adjust for n banners
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
  const nombrePlat1 = formData.get("nombrePlat1");
  const nombrePlat2 = formData.get("nombrePlat2");
  const nombreDessert1 = formData.get("nombreDessert1");
  const nombreDessert2 = formData.get("nombreDessert2");
  const message = formData.get("message");
  this.reset();
  const plat1 = "Plat1";
  const plat2 = "Plat2";
  const dessert1 = "Dessert1";
  const dessert2 = "Dessert2";
  const webhookURL = "https://discord.com/api/webhooks/1335653132247760946/0klK6pV2DH6T2WM7LsZF_Xvdt9piZSrK_YuNNvfV_mC4lsg9aFJ_FPKydFEmeJme3ivl"; //  Webhook

  const payload = {
      content: 
      `📩 **Nouvelle commande reçue !**

      👤 **Nom :** ${name}
      📞 **Numéro :** ${numero}
      📝 **Message :** ${message}

      🏠 **Adresse :** ${adress}
      🛒 **Produits :**
        -${nombrePlat1} ${plat1}
        -${nombrePlat2} ${plat2}
        -${nombreDessert1} ${dessert1}
        -${nombreDessert2} ${dessert2}
        `
};


  try {
      await fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
      });

      alert("Commande envoyée avec succès sur Discord !");


      window.location.href = "index.html"; // Redirection vers la page d'accueil

  } catch (error) {
      alert("Erreur lors de l'envoi de la commande.");
      console.error("Erreur :", error);
  }
});


