import React from 'react'
import PropTypes from 'prop-types'

const Products = ({productData, count}) => {
    console.log(productData);
    count=0;
    return (
        <div>
           <button className="product-data" >
                <div className="product-service">
                    <img src={productData.image_url} />
                    <h3 class="center">{productData.product_name}</h3>
                </div>
            </button>  
        </div>
    )
}

Products.propTypes = {
    productData:PropTypes.object.isRequired,
    count:PropTypes.any.isRequired

}

export default Products
