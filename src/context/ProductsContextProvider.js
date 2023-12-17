
import React, { useState, useEffect } from 'react';
import { CustomProductsContext } from './ProductsContext';

function CustomProductsContextProvider({ children }) {
    // ... existing code ...
    let[Products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((productsList)=>setProducts(productsList))
        .catch((err)=>console.error(err))
    },[])



  return (
    <div>
        <CustomProductsContext.Provider value={[Products,setProducts]}>
            {children}
        </CustomProductsContext.Provider>
    </div>
  )
}


export default CustomProductsContextProvider;
