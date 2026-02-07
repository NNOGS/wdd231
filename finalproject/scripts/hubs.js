import { openModal, closeModal } from "./modal.js";

const container = document.querySelector("#hubsContainer");

async function getHubs() {
  try {
    const response = await fetch("data/hubs.json");
    const data = await response.json();
    displayHubs(data.hubs);
  } catch (error) {
    console.error("Error loading hubs:", error);
  }
}

function displayHubs(hubs) {
  hubs.forEach(hub => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${hub.name}</h3>
      <p>${hub.city}, ${hub.country}</p>
      <p><strong>Focus:</strong> ${hub.focus}</p>
      <button class="details">View Details</button>
    `;

    card.querySelector(".details").addEventListener("click", () => {
      openModal(`
        <h3>${hub.name}</h3>
        <p>${hub.description}</p>
        <p><strong>Founded:</strong> ${hub.founded}</p>
        <a href="${hub.website}" target="_blank">Visit Website</a>
      `);
    });

    container.appendChild(card);
  });
}

getHubs();
