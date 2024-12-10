class Profile {
  constructor(first_name, last_name, sex, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.sex = sex;
    this.age = age;
  }
}// end Profile

function createProfile() {
  let profile;

  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  const sex = document.getElementById('sex').value;
  const dob = document.getElementById('dob').value;

  profile = new Profile(first_name, last_name, sex, dob);
  console.log(profile);

}// end createProfile

