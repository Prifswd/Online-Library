import './Home.css';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Fantasy', 'Sci-Fi', 'Adventure'];

const Home = () => {
  return (
    <div className="home-container">
      <h1>📚 Welcome to the Online Library System</h1>

      <section className="categories">
        <h2>Browse by Category</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-books">
        <h2>Popular Books</h2>
        <ul>
          <li>
            <Link to="/book/1">Harry Potter and the Sorcerer's Stone</Link>
          </li>
          <li>
            <Link to="/book/2">Twilight</Link>
          </li>
          <li>
            <Link to="/book/3">Dune</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
