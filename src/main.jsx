
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import BrowseBooks from './pages/BrowseBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import AddBook from './pages/AddBook.jsx';
import NotFound from './pages/NotFound.jsx';
import NavBar from './components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/books/:category",
    element: (
      <>
        <NavBar />
        <BrowseBooks />
      </>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/book/:id",
    element: (
      <>
        <NavBar />
        <BookDetails />
      </>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/add",
    element: (
      <>
        <NavBar />
        <AddBook />
      </>
    ),
    errorElement: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

