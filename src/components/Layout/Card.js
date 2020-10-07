import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from "prop-types";

export const Card = ({movieProfiles:{movieId, title, genres, year, rating, tag, imdbLink, tmdbLink}}) => {
 return (
    <Container>
  <div className="card">
  <h1>{title}</h1>
  <span>
  <p>Rating: {rating}</p>
  {/* <div className="star"></div>  */}
  </span>
  <p>Genres: {genres}</p>
  <p>Tags:{tag}</p>
   <span>
   <p className="displayInline">IMDB Link: </p>
   <a className="displayInline" href={imdbLink}>Go to IMDB</a>
   </span>  
   <span><p className="displayInline">TMDB Link: </p>
   <a className="displayInline" href={tmdbLink}>Go to TMDB</a>
   </span> 
              
  <p><button>Add to Wishlist</button></p>
</div>
 </Container>
    )
}

Card.propTypes = {
  movieProfiles: PropTypes.object.isRequired
};

export default Card;
