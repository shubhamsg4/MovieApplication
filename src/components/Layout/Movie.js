import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {movieValues} from '../../action/moviedata';
import {connect} from 'react-redux';


 export class Movie extends Component {
   constructor(props)
   {
     super(props)
     {

     }
   }

   getData = e =>{
    e.preventDefault();
    const val= 5;
    this.props.dispatch(movieValues())
    console.log(val);
  }
    render() {
        return (
            <div>
              <button onClick={this.getData}>Get Data</button>
              props.dispatch(movieValues()) 
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
  
connect(mapStateToProps,mapDispatchToProps())(Movie);

