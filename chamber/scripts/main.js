const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

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