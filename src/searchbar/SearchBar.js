
import './SearchBar.css';
import React from 'react';
import searchIcon from '../images/searchIcon.png';

function CustomSearchBar(props) {
    return (
      <div>
  
          <div className=" input-group w-50 mx-auto mt-3 rounded">
              <input type="search" className="form-control rounded" placeholder="Search here" onChange={(e)=>props.handleChange(e.target.value)} />
              <div className=" p-1">
                  <img id='custom-search-logo' src={searchIcon} alt="Search" />
              </div>
          </div>
      </div>
    )
  }
  

export default CustomSearchBar;
