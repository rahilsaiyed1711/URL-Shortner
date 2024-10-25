# URL Shortener

A simple URL shortener built using Node.js, EJS for templating, and JWT for user authentication.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Shorten long URLs to easy-to-share shortened links.
- User authentication with JWT (JSON Web Token).
- Simple, responsive user interface using EJS templates.
- Secure and scalable backend.
- Track how many times a URL has been accessed.
- User-specific dashboards showing created URLs and their stats.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Authentication**: JWT (JSON Web Token)
- **Database**: MongoDB (or any other database you prefer)
- **Other**: Mongoose, bcrypt for password hashing

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/)
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/url-shortener.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add the following environment variables:

   ```bash
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key_for_jwt
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Visit the app at `http://localhost:3000`.

## Usage

### 1. Sign up / Log in

- Users need to sign up or log in to access the URL shortening service. Authentication is handled using JWT.

### 2. Shorten a URL

- After logging in, users can enter a long URL into the input field and click "Shorten" to generate a short URL.

### 3. Access Statistics

- Users can view the statistics for each URL they’ve shortened, including how many times it has been accessed.

### 4. Accessing Shortened URLs

- Use the shortened URL to be redirected to the original long URL.

## Folder Structure

```
url-shortener/
│
├── controllers/            # Request handlers
│   ├── authController.js    # Authentication logic
│   ├── urlController.js     # URL shortening and redirecting logic
│
├── models/                 # MongoDB models
│   ├── User.js              # User schema
│   └── Url.js               # URL schema
│
├── routes/                 # Express routes
│   ├── authRoutes.js        # Authentication routes
│   └── urlRoutes.js         # URL-related routes
│
├── views/                  # EJS templates
│   ├── index.ejs            # Main page template
│   ├── dashboard.ejs        # User dashboard template
│   └── login.ejs            # Login/signup template
│
├── public/                 # Static files (CSS, images, etc.)
│   └── css/
│
├── middleware/             # Middleware functions
│   └── authMiddleware.js    # JWT token verification
│
├── app.js                  # Main application file
├── .env                    # Environment variables
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes.
4. Commit your changes: `git commit -m "Add new feature"`.
5. Push to the branch: `git push origin my-feature-branch`.
6. Open a pull request.

## License

This project is licensed under the MIT License.
