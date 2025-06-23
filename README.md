# Online Library System

## Description
A simple online library system built using React, Redux, and React Router. Users can browse, search, and add books.

## Technologies
- React + Vite
- Redux Toolkit
- React Router DOM
- Vanilla CSS


## 🚀 Features

### 🏠 Home Page
- Welcome message.
- Lists book categories like `Fiction`, `Sci-Fi`, `Fantasy`, `Adventure`.
- Shows a few popular books (like Harry Potter, Twilight).

### 📚 Browse Books Page
- Browse all books or filter by category.
- Search bar to find books by title or author.
- Each book includes a View Details button.

### 📖 Book Details Page
- Accessed via dynamic route `/book/:id`.
- Shows book title, author, description, rating, and image.
- Includes a link back to the Browse Books page.

### ➕ Add Book Page
- Form to add a new book to the library.
- Form validation to ensure all fields are filled.
- Redirects to Browse Books on successful submission.

### ❌ 404 Page
- For unmatched routes "Page Not Found" is shown.
- Includes a link to return to Home.


<!-- ################################################################################## -->


## Installation

git clone https://github.com/yourusername/online-library.git
cd onlineLibrary
npm install
npm run dev



