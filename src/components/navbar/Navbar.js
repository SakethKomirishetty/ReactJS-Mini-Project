
import React from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

function CustomNavbar(props) {
    let Home=useLocation().pathname==='/';
    return (
        <div className='custom-nav'>
            <div className='w-100 '>
            <h2 className='text-center p-1 text-white'>{Home ? 'HOME' : 'PRODUCT'}</h2>
            </div>
        </div>
    );
}

export default CustomNavbar;
