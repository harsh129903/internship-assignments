import React, { useState } from 'react';
import './App.css';


import movie1 from './assets/posters/movie1.jpg';
import movie2 from './assets/posters/movie2.jpg';
import movie3 from './assets/posters/movie3.jpg';
import movie4 from './assets/posters/movie4.jpg';
import movie5 from './assets/posters/movie5.jpg';
import movie6 from './assets/posters/movie6.jpg';
import movie7 from './assets/posters/movie7.jpg';
import movie8 from './assets/posters/movie8.jpg';
import movie9 from './assets/posters/movie9.jpg';
import movie10 from './assets/posters/movie10.jpg';
import movie11 from './assets/posters/movie11.jpg';
import movie12 from './assets/posters/movie12.jpg';
import movie13 from './assets/posters/movie13.jpg';
import movie14 from './assets/posters/movie14.jpg';
import movie15 from './assets/posters/movie15.jpg';
import movie16 from './assets/posters/movie16.jpg';

const posters = [
  movie1, movie2, movie3, movie4,
  movie5, movie6, movie7, movie8,
  movie9, movie10, movie11, movie12,
  movie13, movie14, movie15, movie16
];

const moviesData = posters.map((poster, index) => ({
  id: index + 1,
  title: `Movie Title ${index + 1}`,
  description: "This is a great movie about amazing things happening in a cinematic world.",
  image: poster
}));

function App() {
  const [page, setPage] = useState('list');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const [bookingId, setBookingId] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setPage('details');
  };

  const handleBookSeat = () => {
    setPage('form');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random() * 1000000);
    setBookingId(randomId);
    setPage('success');
  };

  const goHome = () => {
    setPage('list');
    setFormData({ name: '', email: '', mobile: '' });
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      <header>
        <h1 onClick={goHome} style={{ cursor: 'pointer' }}>My Movie Booking</h1>
      </header>

      {/* PAGE 1 */}
      {page === 'list' && (
        <div className="movie-grid">
          {moviesData.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* PAGE 2 */}
      {page === 'details' && selectedMovie && (
        <div className="details-container">
          <button onClick={() => setPage('list')}>&larr; Back</button>
          <div className="details-content">
            <img src={selectedMovie.image} alt={selectedMovie.title} />
            <div className="info">
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.description}</p>
              <button className="book-btn" onClick={handleBookSeat}>Book Seat</button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 3 */}
      {page === 'form' && (
        <div className="form-container">
          <h2>Booking Details</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />

            <label>Email:</label>
            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />

            <label>Mobile:</label>
            <input type="tel" name="mobile" required value={formData.mobile} onChange={handleInputChange} />

            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <button className="cancel-btn" onClick={() => setPage('details')}>Cancel</button>
        </div>
      )}

      {/* PAGE 4 */}
      {page === 'success' && (
        <div className="success-container">
          <h2 style={{ color: 'green' }}>Seat Booked Successfully!</h2>
          <div className="ticket">
            <p><strong>Booking ID:</strong> #{bookingId}</p>
            <p><strong>Movie:</strong> {selectedMovie.title}</p>
            <hr />
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
          </div>
          <button onClick={goHome}>Book Another</button>
        </div>
      )}
    </div>
  );
}

export default App;
