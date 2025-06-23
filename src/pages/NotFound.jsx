import { useRouteError, Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p className="error-message">{error?.statusText || error?.message || 'Oops! Something went wrong.'}</p>
      <Link to="/" className="back-home">⬅ Go to Home</Link>
    </div>
  );
};

export default NotFound;
