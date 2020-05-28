import React from 'react';
import { Container } from 'reactstrap';
// import {Link,Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';



export const Card = () => {
 return (
    <Container>
    <div className="row">
   <div className="card">
  <h1>Juman Ji</h1>
  <span>
  <p>Rating: 4.0</p>
  <div className="star"></div> 
  </span>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Wishlist</button></p>
</div>
<div className="card">
  <h1>Juman Ji</h1>
  <span>
  <p>Rating: 4.0</p>
  {/* <div className="star"></div>  */}
  </span>
  <p>Genres: Adventure|Drama</p>
  <p>Tags:mindfuck,
                suspense,
                thriller,
                tricky,
                twist ending,
                heist</p>
   <span>
   <p className="displayInline">IMDB Link: </p>
   <a className="displayInline" href="https://www.imdb.com/title/tt0110299">Go to IMDB</a>
   </span>  
   <span><p className="displayInline">TMDB Link: </p>
   <a className="displayInline" href="https://www.themoviedb.org/movie/49133">Go to TMDB</a>
   </span> 
              
  <p><button>Add to Wishlist</button></p>
</div>
</div>
 </Container>
    )
}
