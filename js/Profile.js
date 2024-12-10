class Profile {
  constructor(first_name, last_name, sex, dob) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.sex = sex;
    this.dob = dob;
  }

// Array to hold all profile
  static profiles = [];

  static createProfile() {

    const form = document.getElementById('user_profile_form');

    // Get input from the frontend
    const first_name = document.getElementById('user_first_name').value;
    const last_name = document.getElementById('user_last_name').value;
    const sex = document.getElementById('user_sex').value;
    const dob = document.getElementById('user_dob').value;

    // Create the profile object.
    const user_profile = new Profile(first_name, last_name, sex, dob);

    // Log profile information to the console.
    console.log(user_profile);

    // Display profile information on the frontend
    document.getElementById(
        'show_user_first_name').textContent = user_profile.first_name;
    document.getElementById(
        'show_user_last_name').textContent = user_profile.last_name;
    document.getElementById('show_user_sex').textContent = user_profile.sex;
    document.getElementById('show_user_dob').textContent = user_profile.dob;
    document.getElementById('show_user_profile').style.display = 'block';

    // Add new profile to the array
    Profile.profiles.push(user_profile);

    // Log profiles to the console
    console.log(Profile.profiles);

    // Reset form inputs
    form.reset();

  }// end createProfile

}// Create user profile
document.getElementById('create_user_profile').
         addEventListener('click', Profile.createProfile);

