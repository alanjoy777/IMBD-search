import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';
import './search.css';

function Search({ movieName }) {
  const [movie, setMovie] = useState(null); // Initialize movie state as null
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    if (movieName) {
      const fetchMovies = async () => {
        setLoading(true); // Set loading to true at the start of the fetch
        try {
          const response = await fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${movieName}`);
          const data = await response.json();
          setMovie(data); // Update state with fetched data
        } catch (error) {
          console.error('Error fetching movie data:', error);
        } finally {
          setLoading(false); // Set loading to false after fetch is done
        }
      };

      fetchMovies();
    }
  }, [movieName]);

  // Render a loading state or error message if necessary
  if (loading) return <p></p>;
  if (!movie || movie.Response === 'False') return <p>No results found</p>;

  return (
    <div className='search-container d-flex justify-content-center mt-4 mb-4'>
      <MDBCard style={{ maxWidth: '22rem' }} id='main'>
        {movie.Poster !== 'N/A' && (
          <MDBCardImage
            src={movie.Poster}
            alt={movie.Title}
            position='top'
            style={{ width: '100%', height: 'auto' }}
          />
        )}
        <MDBCardBody>
          <MDBCardTitle>{movie.Title}</MDBCardTitle>
          <MDBCardText>
            <strong>Year:</strong> {movie.Year}
            <br />
            <strong>Genre:</strong> {movie.Genre}
            <br />
            <strong>Director:</strong> {movie.Director}
            <br />
            <strong>Actors:</strong> {movie.Actors}
            <br />
            <strong>Plot:</strong> {movie.Plot}
          </MDBCardText>
          <MDBCardLink href={movie.Website} target='_blank'>
            Official Website
          </MDBCardLink>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Search;
