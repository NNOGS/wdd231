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

  function openModal(contact) {
    contactDetails.innerHTML = `
      <img src="${contact.image}" alt="${contact.name}" 
           loading="lazy" 
           style="width:100%; border-radius:6px; margin-bottom:10px;">
      <h3>${contact.name}</h3>
      <p>${contact.description}</p>
      <p><strong>Address:</strong> ${contact.address}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <a href="${contact.website}" target="_blank">Visit Our Website</a>
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
