# SIM Sekolah SMKN 1 Punggelan Backend

This is the backend API for the SIM Sekolah SMKN 1 Punggelan clone project. It is built with Node.js and Express.

## Features

- User authentication with JWT
- Password hashing with bcrypt
- Protected API endpoints
- Sample endpoints for user profile and school data

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository or download the backend folder.
2. Navigate to the backend directory:

```bash
cd pijar-sekolah-backend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The server will start on port 4000 by default.

## API Endpoints

- `POST /api/login` - Authenticate user and receive JWT token.
- `GET /api/profile` - Get user profile (requires JWT token).
- `GET /api/schools` - Get list of schools (requires JWT token).

## Environment Variables

- `JWT_SECRET` - Secret key for JWT signing (currently hardcoded, should be set in production).

## Notes

- This backend uses an in-memory user store for demonstration. Replace with a database for production use.
- Passwords are hashed using bcrypt.
- JWT tokens expire in 1 hour.

## References

- [Node.js Express JWT Authentication Tutorial](https://www.youtube.com/watch?v=lpi_jeJAjyk)
- [Basic API Design Guide](https://anyflip.com/cmfah/vkpx/basic)
