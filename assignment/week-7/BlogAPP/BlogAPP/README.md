# Full Stack Blog Application

A Full Stack Blog Application developed using React.js, Node.js, Express.js, and MongoDB.  
The application allows users, authors, and admins to manage blog articles with authentication and role-based access.

---

# Project Overview

This project contains:

- Frontend built with React and Vite
- Backend built with Express.js
- MongoDB database using Mongoose
- JWT Authentication
- Cloudinary image uploads
- REST APIs

The application supports multiple roles:
- User
- Author
- Admin

---

# Features

## User Features
- User Registration
- User Login
- View Articles
- Read Blog Posts
- Responsive UI

## Author Features
- Create Articles
- Edit Articles
- Delete Articles
- Upload Images
- Manage Own Posts

## Admin Features
- Manage Users
- Manage Authors
- Monitor Articles
- Control Application Data

---

# Frontend Features

- React.js UI
- Routing using React Router DOM
- API Requests using Axios
- Responsive Design
- Component-Based Architecture
- State Management
- Authentication Handling

---

# Backend Features

- REST API Development
- JWT Authentication
- MongoDB Integration
- Middleware Handling
- Image Upload Support
- Role-Based Authorization
- File Upload using Multer
- Cloudinary Integration

---

# Technologies Used

## Frontend Technologies

- React.js
- Vite
- Axios
- React Router DOM
- Bootstrap / CSS

## Backend Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- dotenv
- Multer
- Cloudinary

---

# Project Folder Structure

```text
Project/
│
├── Frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   │
│   ├── APIs/
│   │   ├── AdminAPI.js
│   │   ├── AuthorAPI.js
│   │   ├── UserAPI.js
│   │   └── CommonAPI.js
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── cloudinaryUpload.js
│   │   └── multer.js
│   │
│   ├── middlewares/
│   │   └── verifyToken.js
│   │
│   ├── models/
│   │   ├── UserModel.js
│   │   └── ArticleModel.js
│   │
│   ├── .env
│   ├── .env.example
│   ├── admin-req.http
│   ├── author-req.http
│   ├── package.json
│   └── server.js
│
└── README.md