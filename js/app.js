// Create semantic elements
const HEADER_ELEMENT = document.createElement('header');
const MAIN_ELEMENT = document.createElement('main');
const FOOTER_ELEMENT = document.createElement('footer');

function createProgramElement() {
  const programEl = document.getElementById('program');
  const programHeading = document.createElement('h2');
  programHeading.textContent = 'Enter Program';
  programEl.appendChild(programHeading);
}

const programArray = [];

function addInput() {
  const inputContainer = document.getElementById('inputContainer');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = 'Enter input';
  newInput.required = true;
  inputContainer.appendChild(newInput);
}

function removeInput() {
  const inputContainer = document.getElementById('inputContainer');
  if (inputContainer.children.length > 1) {
    inputContainer.removeChild(inputContainer.lastElementChild);
  }
}

function submitForm() {
  const inputs = document.querySelectorAll('#inputContainer input');
  const inputValues = Array.from(inputs).map(input => input.value.trim());

  if (inputValues.every(value => value)) { // Check if all inputs have values
    programArray.push(inputValues);
    document.getElementById('inputForm').reset(); // Clear form
    displayArray();
  }
}

function displayArray() {
  const outputForm = document.getElementById('outputForm');
  outputForm.innerHTML = ''; // Clear previous entries

  programArray.forEach(inputs => {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Record';
    fieldset.appendChild(legend);

    inputs.forEach((inputValue, index) => {
      const label = document.createElement('label');
      label.textContent = `Input ${index + 1}:`;
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = inputValue;
      inputField.readOnly = true; // Make the field read-only to prevent editing

      fieldset.appendChild(label);
      fieldset.appendChild(inputField);
      fieldset.appendChild(document.createElement('br')); // Line break for readability
    });

    outputForm.appendChild(fieldset);
  });
}

createProgramElement();
