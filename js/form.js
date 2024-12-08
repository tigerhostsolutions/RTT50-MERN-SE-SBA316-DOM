const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Event-based validation for the name input
nameInput.addEventListener('input', function() {
  const nameValue = nameInput.value;
  if (/\d/.test(nameValue)) {
    nameError.textContent = 'Name must not contain numbers.';
  } else {
    nameError.textContent = '';
  }
});

// Form submission event
form.addEventListener('submit', function(event) {
  // Check again in case of fast typing
  if (/\d/.test(nameInput.value)) {
    nameError.textContent = 'Name must not contain numbers.';
    event.preventDefault(); // Prevent form submission
    return;
  }
  event.preventDefault();  // Prevent form from submitting to a server
  formStatus.textContent = 'Form successfully submitted!';
});