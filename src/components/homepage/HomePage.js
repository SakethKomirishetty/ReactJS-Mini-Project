

import './HomePage.css';
import React, { useContext, useState } from 'react';
import CustomCard from '../card/Card';
import CustomSearchBar from '../../searchbar/SearchBar';
import { CustomProductsContext } from '../../context/ProductsContext';

function CustomHomePage() {
    let[allProducts] = useContext(CustomProductsContext)
    let [input,setInput] = useState("")
    let results = allProducts.filter( (userObj)=>{
    
      return (userObj) && (userObj.title.toLowerCase().includes(input.toLowerCase()) || userObj.category.toLowerCase().includes(input.toLowerCase()) || userObj.description.toLowerCase().includes(input.toLowerCase()) )
    } )
  
    function handleChange(value){
      setInput(value)
    }
    console.log(allProducts)
    return (
    <div>
      <CustomSearchBar handleChange = {handleChange}/>
      <div className='custom-homepage-products-container'>
            <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              {
                 results.map((productObj)=>(
                  <CustomCard id = {productObj.id} image = {productObj.image}  title = {productObj.title} description =  {productObj.description} />
                  
                 ))
              }
  
            </div>
      </div>
    </div>
    )
  }

export default CustomHomePage;
