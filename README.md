# ChatApp — Real-Time Chat Application

A full-stack chat application where users can sign up, log in, and have one-on-one or group conversations — all in real time.


## Features

- **User Authentication** — Sign up with a username, email, and password. Log in securely with encrypted credentials.
- **One-on-One Chat** — Search for other users and start a private conversation instantly.
- **Group Chats** — Create group conversations and chat with multiple people at once.
- **Dark Mode** — Toggle between light and dark themes for a comfortable experience.
- **Responsive Design** — Works smoothly on both desktop and mobile screens.

---

## Built With

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React, Material UI, Framer Motion |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB (Atlas)                   |
| Auth      | JSON Web Tokens (JWT), bcrypt     |

---

## How It Works

1. **Sign Up / Log In** — Create an account or log in with your username and password.
2. **Browse Users** — See a list of all registered users and start a chat with anyone.
3. **Send Messages** — Type your message and hit Enter or click Send.
4. **Create Groups** — Give your group a name and start chatting with multiple people.
5. **Switch Themes** — Click the moon/sun icon in the sidebar to toggle dark mode.
6. **Log Out** — Click the exit icon to securely log out.

---

## Project Structure

```
chatApp/
├── client/                 # Frontend (React app)
│   └── src/
│       ├── components/     # UI components (Login, Sidebar, ChatArea, etc.)
│       ├── features/       # State management (Redux slices)
│       └── assets/         # Images and logos
│
├── server/                 # Backend (Express API)
│   ├── controllers/        # Business logic for users, chats, messages
│   ├── models/             # Database schemas
│   ├── routes/             # API endpoints
│   ├── middleware/          # Authentication & error handling
│   └── config/             # JWT token generation
│
└── .gitignore
```
