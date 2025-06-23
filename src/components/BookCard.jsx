import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className='book-card' style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <h3>{book.title}</h3>
    <p><strong>Author:</strong> {book.author}</p>
    <p><strong>Category:</strong> {book.category}</p>
    <Link to={`/book/${book.id}`}>View Details</Link>
  </div>
);

export default BookCard;
