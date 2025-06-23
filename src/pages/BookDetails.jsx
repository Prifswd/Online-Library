import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="details-container">
      <img src={book.image} alt={book.title} className="details-img" />
      <div className="details-text">
        <h2>{book.title}</h2>
        <h4>by {book.author}</h4>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}</p>
        <Link to={`/books/${book.category.toLowerCase()}`} className="back-link">⬅ Back to Browse</Link>
      </div>
    </div>
  );
};

export default BookDetails;
