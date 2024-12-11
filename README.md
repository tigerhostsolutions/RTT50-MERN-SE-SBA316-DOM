Profile Management Web Application

A simple web application for creating, managing, and dynamically rendering user profiles. This project is built using HTML, CSS, and JavaScript (ES6). It demonstrates key concepts like DOM manipulation, template cloning, dynamic attribute modifications, and event handling.

Features

- Create User Profiles: A form to input user details such as first name, last name, gender, and date of birth.

- Dynamic Profile Rendering: Displays all created profiles in a reusable template format using the renderProfiles 
function.

- Real-Time Updates: Profiles are rendered dynamically without the need to reload the page.

- Event Handling: Provides interactive buttons for actions like showing profiles.
Clean, modular, and maintainable code, leveraging ES6 features.

Tech Stack

Frontend:
HTML5 (structure)
CSS3 (styling)
JavaScript ES6 (dynamic behavior)

How It Works

Create Profile:
- Fill out the form with user details.
- Click the "Create Profile" button.
- The new profile is displayed on the page, and existing profiles remain in the list.

View All Profiles:
Use the "Get Profiles" button to load and view all the profiles stored in memory.

Dynamic Rendering:
The profiles are displayed using an HTML template that is cloned and filled with profile data dynamically.

Key Components:

HTML:
- A form (create_user_profile_form) for adding new profiles.

- A button (get_user_profiles_button) for displaying all profiles.

- A reusable template (profile_template) for dynamically creating profile cards.

- A container (profiles_container) to display the list of profiles.

JavaScript:
- Profile Class: Handles the creation and storage of user profiles.

- Dynamic Rendering: Uses DOM manipulation to display profiles using the renderProfiles method.

- Event Handlers: Event-driven user interactions like form submissions and button clicks.

CSS: (Optional for styling)
- Styles the form and profile cards for better user experience.

