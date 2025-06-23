import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/books/all">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
};

export default NavBar;
