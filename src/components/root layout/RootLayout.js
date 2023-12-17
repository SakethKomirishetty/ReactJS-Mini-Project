// import React from 'react'
// import Navbar from '../navbar/Navbar'
// import { Outlet } from 'react-router-dom'

// function RootLayout() {
//   return (
//     <div>
//         <Navbar/>
//         <Outlet/>
//     </div>
//   )
// }

// export default RootLayout

// RootLayout.js
import React from 'react';
import CustomNavbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

function CustomRootLayout() {
    return (
        <div>
            <CustomNavbar />
            <Outlet />
        </div>
    );
}

export default CustomRootLayout;
