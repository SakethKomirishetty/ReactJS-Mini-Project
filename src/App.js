
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomRootLayout from './components/root layout/RootLayout';
import CustomHomePage from './components/homepage/HomePage';
import CustomProductPage from './components/Product Page/ProductPage';

function CustomApp() {
    // ... existing code ...
    let router = createBrowserRouter([{
      path:'/',
      element: <CustomRootLayout/>,
  
      children:[
        {
          path:'/',
          element:<CustomHomePage/>
        },
  
        {
            path: '/:id',
            element : <CustomProductPage />
        }
    ]
  
    }])
  
    return (
      <div className="App">
                  <RouterProvider router={router}/>
      </div>
    );
  }

export default CustomApp;
