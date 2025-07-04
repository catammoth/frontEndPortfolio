console.log("Script loaded successfully");

function validateForm() {
  const nameInput = document.getElementById("name");
  console.log(nameInput);
}

// Update current time
function updateCurrentTime() {
  const currentTimeElement = document.getElementById("current-time");
  const now = new Date();
  currentTimeElement.textContent = now.toLocaleString();
}

// Update preview when form is submitted
function updatePreview() {
  // Get form values
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const genderInputs = document.getElementsByName("gender");
  const message = document.getElementById("pesan").value;

  // Get selected gender
  let selectedGender = "";
  for (const radio of genderInputs) {
    if (radio.checked) {
      selectedGender = radio.value;
      break;
    }
  }

  // Update preview elements
  document.getElementById("preview-name").textContent = name || "-";
  document.getElementById("preview-birthdate").textContent = birthdate || "-";
  document.getElementById("preview-gender").textContent = selectedGender || "-";
  document.getElementById("preview-message").textContent = message || "-";
}

// Initialize when document is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Update current time every second
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);

  // Get form element
  const form = document.querySelector("form");

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    updatePreview();
  });

  // Initialize preview with dashes
  document.getElementById("preview-name").textContent = "-";
  document.getElementById("preview-birthdate").textContent = "-";
  document.getElementById("preview-gender").textContent = "-";
  document.getElementById("preview-message").textContent = "-";
});
