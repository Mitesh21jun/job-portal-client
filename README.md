# Job Portal Client

This is the frontend application for the Job Portal project, built using React and Tailwind CSS. It provides a user-friendly interface for job seekers and employers to interact with the platform.

## Features

- User authentication (Signup/Login)
- Job posting and management for employers
- Job search and application for job seekers
- User profile management
- Protected routes for authenticated users

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mitesh21jun/job-portal-client
   ```

2. Navigate to the project directory:
   ```bash
   cd job-portal-client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Folder Structure

- `src/`
  - `api/`: Contains API-related utilities (e.g., `axios.js` for HTTP requests).
  - `components/`: Reusable components like `Navbar`, `ProtectedRoute`, and `PublicRoute`.
  - `pages/`: Page components such as `Home`, `Dashboard`, `Job`, `Login`, `Signup`, etc.
  - `utils/`: Utility functions like `auth.js` for authentication handling.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
