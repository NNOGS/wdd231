import { contact } from "../data/contact.mjs";

document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector("#contact-content");
  const modal = document.querySelector("#modal");
  const contactDetails = document.querySelector("#contactDetails");
  const closeModalBtn = document.querySelector("#closeContact");

  function displayContact() {
    contact.forEach(item => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="80" height="80">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more">Learn More</button>
      `;

      const button = card.querySelector(".learn-more");
      button.addEventListener("click", () => openModal(item));

      container.appendChild(card);
    });
  }

  function openModal(hub) {
    contactDetails.innerHTML = `
      <img src="${hub.image}" alt="${hub.name}" 
           loading="lazy" 
           style="width:100%; border-radius:6px; margin-bottom:10px;">
      <h3>${hub.name}</h3>
      <p>${hub.description}</p>
      <p><strong>Address:</strong> ${hub.address}</p>
      <p><strong>Phone:</strong> ${hub.phone}</p>
      <p><strong>Email:</strong> ${hub.email}</p>
      <a href="${hub.website}" target="_blank">Visit Our Website</a>
    `;

    modal.style.display = "flex";
  }

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  displayContact();
});
