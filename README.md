# User Profile Management System

This project is a **React-based User Profile Management System** designed to allow users to manage their profiles, edit information through modals, and view their details in a clean, responsive UI.

## Features

- **User Profile Page**:
  - Displays user information such as name, email, phone number, and bio.
  - Allows users to edit their profile details via a modal.
- **Edit Modal**:
  - Tailwind CSS-powered, responsive design.
  - Includes form fields for name, email, phone number, and bio.
  - Updates state dynamically when form inputs are changed.
- **Responsive Design**:
  - Fully responsive using Tailwind CSS.
  - Works seamlessly on mobile, tablet, and desktop screens.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sanakulovme/Shop-Hub.git
   cd Shop-Hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── category        # Categories (index.jsx)
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Profile.jsx     # User profile page
│   │   ├── Slider.jsx      # Slider Component
│   │   ├── Products.jsx    # Products page
│   │   ├── NotFound.jsx    # Not Found page
│   │   ├── Categories.jsx  # Categories page
│   │   ├── Modal.jsx       # Edit profile modal
│   │   └── Footer.jsx      # Footer component
│   ├── data
│   │   └── products.json   # Products data
│   ├── App.jsx             # Main application entry point
│   └── index.js            # React DOM renderer
├── public
│   └── index.html          # Root HTML file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Usage

1. **View User Profile**:
   - Navigate to the profile page to view user details.

2. **Edit User Details**:
   - Click the "Edit Profile" button to open the modal.
   - Update fields such as name, email, phone, or bio.
   - Click "Save" to apply changes.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and modern styling.
- **React Hooks**: To manage state and handle user interactions.
- **JSON Data**: For simulating user information.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out at [your-email@example.com].
