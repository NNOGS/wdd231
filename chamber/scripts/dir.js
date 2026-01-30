const dataUrl = "data/members.json";
const cards = document.querySelector("#d-card");
const toggleBtn = document.querySelector("#d-btn");

async function getMembersData() {
  const response = await fetch(dataUrl);
  const data = await response.json();
  displayMembers(data.companies);
}

function displayMembers(members) {
  cards.innerHTML = "";

  members.forEach(company => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <h2>${company.name}</h2>
      <img src="images/${company.image}" alt="${company.name} logo" loading="lazy">
      <p>${company.address}</p>
      <p>${company.phone}</p>
      <a href="${company.website}" target="_blank">Visit Website</a>
    `;

    cards.appendChild(card);
  });
}

toggleBtn.addEventListener("click", () => {
  cards.classList.toggle("grid");
  cards.classList.toggle("list");
});

getMembersData();