import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {movieValues} from '../../action/moviedata';
import {connect} from 'react-redux';
console.log(this.props.movieProfiles);
const getData = e =>{
    e.preventDefault();
    const val= movieValues;
    console.log(val);
  }

 class Movie extends Component {
    render() {
        return (
            <div>
              <button onClick={getData}>Get Data</button>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {movieprofiles: state.movieProfiles};
  }
  
  const mapDispatchToProps =() => {
    return{
          movieValues
    } 
  };
  
  Movie.propTypes = {
    movieProfiles: PropTypes.array.isRequired
  };
  

  export default connect(mapStateToProps,mapDispatchToProps())(Movie);

