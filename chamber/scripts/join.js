const timestamp = document.querySelector("#timestamp");
timestamp.value = new Date().toISOString();



// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Open modal buttons
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.showModal();
  });
});

// Close modal buttons
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});

