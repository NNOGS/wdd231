document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector("#hubsContainer");
  const modal = document.querySelector("#modal");
  const modalDetails = document.querySelector("#modalDetails");
  const closeModalBtn = document.querySelector("#closeModal");

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
      <img src="${hub.image}" alt="${hub.name}" loading="lazy">
      <h3>${hub.name}</h3>
      <p>${hub.city}, ${hub.country}</p>
      <p><strong>Focus:</strong> ${hub.focus}</p>
      <button class="details">View Details</button>
    `;

      card.querySelector(".details").addEventListener("click", () => {
        openModal(hub);
      })
      
      container.appendChild(card);
    });
  
}
  
  function openModal(hub) {
    modalDetails.innerHTML = `
    <img src="${hub.image} alt="${hub.name}" loading="lazy style="width:100%; border-radius:6px; margin-bottom:10px;">
    <h3>${hub.name}</h3>
    <p>${hub.description}</p>
    <p><strong>Founded:</strong>${hub.founded}</p>
    <p><strong>Location:</strong>${hub.city}, ${hub.country}</p>
    <p><strong>Focus:</strong>${hub.focus}</p>
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

  getHubs();
  
});
