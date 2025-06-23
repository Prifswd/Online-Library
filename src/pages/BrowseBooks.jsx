import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './BrowseBooks.css';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books);
  const { category } = useParams();
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category === 'all' || book.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-container">
      <h2>Browse Books {category !== 'all' && `(${category})`}</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="book-list">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <Link to={`/book/${book.id}`} className="details-link">View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
