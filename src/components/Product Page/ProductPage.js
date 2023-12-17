// import React from 'react'
// import './ProductPage.css'
// import { useParams } from 'react-router-dom'
// import { ProductsContext } from '../../context/ProductsContext';
// import { useContext } from 'react';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// function ProductPage(props) {
//     let[allProducts] = useContext(ProductsContext)
//     let {id} = useParams()
//     let product = allProducts[id-1] 
//     console.log(product)
//   return (
//     <div>
//         <div className="container product-page-container m-5">
//             <div className="row row-cols-md-2 row-cols-xs-1 m-5">
//                 <div className="col-xs-12 col-sm-6  product-image-box">
//                     {
//                         <img id='product-page-image' className='rounded-5 img-fluid' src={product&&product.image} alt="product_image" /> || <Skeleton/>
//                     }
//                 </div>

//                 <div className="col-xs-12 col-md-6  product-details-box">
//                     <h5 className="title m-1 display-6" id='product-title' style={{fontWeight:"bolder"}}>Name:  {product&&product.title}</h5>
//                     <h4 className="lead display-6 m-1 text-dark" style={{fontWeight:"bolder"}}>Price: Rs.   {product&&product.price}</h4>
//                     <p className='lead m-1 '> <u>Description:</u>  {product&&product.description}</p>
//                     <h5 className="lead display-6 m-1"><u>Rating:</u>   {product&&product.rating.rate} </h5>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ProductPage

// ProductPage.js
import React from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CustomProductsContext } from '../../context/ProductsContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CustomProductPage(props) {
    let[allProducts] = useContext(CustomProductsContext)
    let {id} = useParams()
    let product = allProducts[id-1] 
    console.log(product)
  return (
    <div>
        <div className="container custom-product-page-container m-5">
            <div className="row row-cols-md-2 row-cols-xs-1 m-5">
                <div className="col-xs-12 col-sm-6  product-image-box">
                    {
                        <img id='custom-product-page-image' className='rounded-5 img-fluid' src={product&&product.image} alt="product_image" /> || <Skeleton/>
                    }
                </div>

                <div className="col-xs-12 col-md-6  product-details-box">
                    <h5 className="title m-1 display-6 text-white" id='product-title' style={{fontWeight:"bolder"}}>Name:  {product&&product.title}</h5>
                    <h4 className="lead display-7 m-1 text-white" style={{fontWeight:"bolder"}}>Price:    {product&&product.price}.Rs</h4>
                    <p className='lead m-1 text-white'> <u>Description:</u>  {product&&product.description}</p>
                    <h5 className="lead display-6  m-1 text-white"><u>Rating:</u>   {product&&product.rating.rate} </h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomProductPage;
