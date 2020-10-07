import React,{useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {movieValues, productValues} from '../../action/moviedata';
import {connect} from 'react-redux';
import TestCard from './TestCard';
// import {productValues} from "../../action/moviedata";


 export const Dashboard = ({ movieValues, actionTest, moviedata:{movieProfiles,loading,} }) => {
          useEffect(() => {
              movieValues();
              // productValues();
          }, [movieValues]);
          console.log(movieProfiles);
           const handleClick=()=>{
             debugger;
             productValues(135);

           }


          return (
            <Fragment>
              <h1>Dashboard</h1>
              {/* <button onClick={handleClick}></button> */}

              {/* {loading === false && movieProfiles.map((movieprofile) => (
                  <Fragment>
                  <h1>Dashboard</h1>
                  <ul>
                  <li key={movieprofile.movieId}>{movieprofile.title}</li>
                  </ul>
                  </Fragment>
                ))} */}

              <Fragment classname="">
                {loading === false &&
                  movieProfiles.map((movieprofiles) => (
                    <TestCard
                      key={movieprofiles.id}
                      movieProfiles={movieprofiles}
                    />
                  ))}
              </Fragment>
            </Fragment>
          );
        };
 const mapStateToProps = state => ({
   moviedata: state.moviedata
 });

 Dashboard.propTypes = {
   movieValues: PropTypes.func.isRequired,
   movieProfiles: PropTypes.object.isRequired,
  //  productValues:PropTypes.func.isRequired,
 };


 export default connect(mapStateToProps, {movieValues})(Dashboard);