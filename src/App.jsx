
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import AddBook from './pages/AddBook.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
