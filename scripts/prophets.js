const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

    const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        name.textContent = `${prophet.name} ${prophet.lastname}`;
        const birthDate = document.createElement("p");
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        const birthPlace = document.createElement("p");
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        const portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    })
    
}
getProphetData();