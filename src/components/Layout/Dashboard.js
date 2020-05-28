import React from 'react';
import PropTypes from 'prop-types';
import {movieValues} from '../../action/moviedata';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

 export const Dashboard=(props)=>{

  console.log(props.movieProfiles);
  const getData = e =>{
    e.preventDefault();
   // const val= props;
  //  console.log(movieProfiles);
  }
  
  return(
      <div>
      <button onClick={getData}>Get Data</button>
      </div>
  )
 }
//  function mapToProps(state){
//   return{
//     movieProfiles:state.movieProfiles
//   }
// }

// function mapToDispatch(dispatch){
//   return {
//     actions: bindActionCreators(movieValues,dispatch)
//    }
// }

// export default connect(mapToProps,mapToDispatch)(Dashboard);

  const mapStateToProps = (state) => {
  return {movieprofiles: state.movieProfiles};
}

const mapDispatchToProps =() => {
  return{
        movieValues
  } 
};

Dashboard.propTypes = {
  movieProfiles: PropTypes.array.isRequired
};

  export default connect(mapStateToProps,mapDispatchToProps())(Dashboard);