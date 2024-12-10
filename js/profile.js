class Profile {
  constructor(first_name, last_name, sex, dob) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.sex = sex;
    this.dob = dob;
  }

}// end Profile

function createProfile() {
  let profile;

  // Get input from the frontend
  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  const sex = document.getElementById('sex').value;
  const dob = document.getElementById('dob').value;

  // Create the profile object.
  profile = new Profile(first_name, last_name, sex, dob);

  // Log new profile to the console.
  console.log(profile);

  //
  document.getElementById('show_first_name').textContent = profile.first_name;
  document.getElementById('show_last_name').textContent = profile.last_name;
  document.getElementById('show_sex').textContent = profile.sex;
  document.getElementById('show_dob').textContent = profile.dob;

  // Display the output section
  document.getElementById('show_profile').style.display = 'block';

}// end createProfile

const button = document.getElementById('create_profile');
button.addEventListener('click', createProfile);