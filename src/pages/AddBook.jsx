import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice.js';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addBook(formData));
      navigate('/books/all');
    }
  };

  return (
    <div className="addbook-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        {['title', 'author', 'description', 'rating', 'category', 'image'].map((field) => (
          <div key={field}>
            <input
              type="text"
              name={field}
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <p className="error">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
