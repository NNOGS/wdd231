
const navbutton = document.querySelector('#menu');
const navBar = document.querySelector('#nav');

if (navbutton && navBar) {
  navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
  });
}

const modified = document.getElementById("lastModified");
if (modified) {
  modified.textContent = document.lastModified;
}




const visitCount = Number(localStorage.getItem("visits")) || 0;
localStorage.setItem("visits", visitCount + 1);
