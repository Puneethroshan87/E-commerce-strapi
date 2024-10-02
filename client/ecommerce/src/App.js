import logo from './logo.svg';
// import './App.css';


import {       //importing from react router 
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from './pages/home/home';
import Products from './pages/products/products';
import Product from './pages/product/product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./app.scss"

const Layout =()=>{    //using layout to control the components because nav and footer appears everycomponent so only content changes .so by using layout we can control them in the outlet
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",                
    element: <Layout />,  //in the layout we can add any component we want only the middle content changes (nav and footer doesnot changes ) 
    children:[
      {
        path:"/",
        element:<Home/>   //routing of components paths
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  },
])

function App() {
  return (
    <div >
       <RouterProvider router={router} />       
    </div>
  );
}

export default App;
