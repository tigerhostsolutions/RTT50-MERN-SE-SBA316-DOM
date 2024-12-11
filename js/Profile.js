class Profile {
  constructor(first_name, last_name, sex, dob) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.sex = sex;
    this.dob = dob;
  }

  static handleFieldValidation(input) {
    if (input.validity.valid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }
    else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  }

  static validateForm(formElement) {
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return false;
    }
    return true;
  }

  static profiles = [];

  static createProfile(e) {
    e.preventDefault(); // Prevent page submission

    const form = document.getElementById('create_user_profile_form');

    // Validate the full form on submit
    if (!Profile.validateForm(form)) {
      return; // Exit if the form is invalid
    }

    const first_name = form.querySelector('[name="user_first_name"]')?.value || '';
    const last_name = form.querySelector('[name="user_last_name"]')?.value || '';
    const sex = form.querySelector('[name="user_sex"]')?.value || '';
    const dob = form.querySelector('[name="user_dob"]')?.value || '';

    const user_profile = new Profile(first_name, last_name, sex, dob);
    console.log(user_profile);
    document.getElementById(
        'show_user_first_name').textContent = user_profile.first_name;
    document.getElementById(
        'show_user_last_name').textContent = user_profile.last_name;
    document.getElementById('show_user_sex').textContent = user_profile.sex;
    document.getElementById('show_user_dob').textContent = user_profile.dob;
    document.getElementById('show_user_profile').style.display = 'block';

    Profile.profiles.push(user_profile);
    localStorage.setItem('profiles', JSON.stringify(Profile.profiles));
    console.log(Profile.profiles);

    form.reset();

    form.querySelectorAll('input, select').forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });

  }// end createProfile

  static renderProfiles(profiles) {
    const profiles_container = document.getElementById('profiles_container');
    profiles_container.innerHTML = ''; // Clear previous content

    const template = document.getElementById('profile_template');

    profiles.forEach(profile => {
      const clone = document.importNode(template.content, true);
      clone.querySelector('.first_name').textContent = profile.first_name;
      clone.querySelector('.last_name').textContent = profile.last_name;
      clone.querySelector('.sex').textContent = profile.sex;
      clone.querySelector('.dob').textContent = profile.dob;

      profiles_container.appendChild(clone);
    });
  }
}// end Profile

const savedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
Profile.profiles.push(...savedProfiles);

document.querySelectorAll('input, select').
         forEach((input) => {
           input.addEventListener('input', () => {
             Profile.handleFieldValidation(input);
           });
         });

document.getElementById('create_user_profiles_button').
         addEventListener('click', Profile.createProfile);

document.getElementById('get_user_profiles_button').
         addEventListener('click', (e) => {
           e.preventDefault(); // prevents data retrieved from disappearing
           // from page reload
           Profile.renderProfiles(Profile.profiles);
         });