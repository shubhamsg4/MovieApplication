
import React,{useEffect,Fragment,useState} from 'react';
import PropTypes from "prop-types";
import {productValues} from "../../action/moviedata";
import {connect} from 'react-redux';
import Products from './Products';

export const TestCard = ({movieProfiles:{image,id,display_order,name},prodData:{productData,loading},productValues}) => {

    const [product, setProduct] = useState(false);
    const [count, setCount] = useState(0);
    
    // useEffect(() => {
    // },[]);
    const handleClick = (e,id) =>{
        e.preventDefault();
        debugger;
        productValues(id);
        setProduct(true);
        setCount(1);
        console.log("componentsad");

    }

    // setCount(0);
 return (
     <Fragment>
    <div className="grid-container-2-80">

      <div className="vertical-flex">
      {/* {setNotificationData.map((data)=>(
          <p>{data}</p>
      ))} */}
     <button class="center-service" onClick={(e)=>handleClick(e,id)}>
                <div class="service">
                    <img src={image} />
                    <h3 class="center">{name}</h3>
                </div>
            </button>

            </div>
            
            <div className="vertical-flex">
                {loading === false && product === true && count === 1 &&
                  productData.map((productdata) => (
                    <Products
                    key={productdata.product_id}
                    productData={productdata}
                    count={count}
                    />
                  ))}

               </div>
              </div>
</Fragment>
    )
}

const mapStateToProps = state => ({
    prodData: state.moviedata
  });



TestCard.propTypes = {
    movieProfiles: PropTypes.object.isRequired,
    productValues: PropTypes.func.isRequired,
    productData: PropTypes.object.isRequired
  };

  export default connect(mapStateToProps,{productValues})(TestCard);
