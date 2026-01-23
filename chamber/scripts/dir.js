const dataUrl = "data/members.json";
const cards = document.querySelector("#d-card");
const spotlightContainer = document.querySelector("#spotlight-container");

async function getMembersData() {
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
      
    if (cards) displayMembers(data.companies);
    if (spotlightContainer) displaySpotlights(data.companies);
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

function displayMembers(members) {
    cards.innerHTML = "";

    members.forEach(company => {
        const card = document.createElement("section");
        card.classList.add("member-card", `level-${company.membershipLevel}`);
          
        const name = document.createElement("h2");
        name.textContent = company.name;
        
        const badge = document.createElement("span");
        badge.classList.add("badge");
      
        let levelText = "Member";
        if (company.membershipLevel === 3) {
          levelText = "Gold Member";  
          badge.textContent = "Gold";
          badge.classList.add("gold");
        } else if (company.membershipLevel === 2) {
          levelText = "Silver Member";
          badge.textContent = "Silver";
          badge.classList.add("silver");
        } else {
          badge.textContent = "Member";
          badge.classList.add("basic");
       }
      
        const portrait = document.createElement("img");
        portrait.src = `images/${company.image}`;
        portrait.alt = `${company.name} logo`;
        portrait.loading = "lazy";
        portrait.width = 40;
        portrait.height = 20;

        const address = document.createElement("p");
        address.textContent = `Address: ${company.address}`;
          
        const phone = document.createElement("p");
        phone.textContent = `Phone: ${company.phone}`;
          
        const website = document.createElement("p");
        website.innerHTML = `<a href="${company.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>`;


        const membership = document.createElement("p");
      membership.textContent = `Membership Level: ${levelText}`;

      const description = document.createElement("p");
      description.textContent = company.description;
       
      card.append(name, badge, portrait, address, phone, website, membership, description);
      cards.appendChild(card);
       
    });
    
};

function displaySpotlights(members) {
  // Filter only Silver & Gold members
  const qualified = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
  const selected = qualified.sort(() => 0.5 - Math.random()).slice(0, 3);
  
  sportlightContainer.innerHTML = "";

  selected.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    const img = document.createElement("img");
    img.src = `images/${member.image}`;
    img.alt = `${member.name} logo`;
    img.loading = "lazy";
    img.width = 40;
    img.height = 20;

    const name = document.createElement("h3");
    name.textContent = member.name;

    const level = document.createElement("p");
    level.textContent = member.membershipLevel === 3 ? "Gold Member" : "Silver Member";

    card.append(img, name, level);
    spotlightContainer.appendChild(card);
  });

}
       
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');  


// Toggle the show class on and off
navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');
});

const toggleBtn = document.querySelector("#d-btn");

toggleBtn.addEventListener("click", () => {
  cards.classList.toggle("grid");
  cards.classList.toggle("list");
  
 toggleBtn.textContent = cards.classList.contains("list")
? "View Directory in Grid"
: "View Directory in List";
});

document.getElementById("lastModified").innerHTML = document.lastModified;

getMembersData();