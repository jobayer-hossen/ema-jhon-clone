import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/layout/Home';
import Shop from './components/shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { cartProductsLoader } from './Loders/cartProductsLoder';
import Login from './components/login/Login';
import Signup from './components/signUp/Signup';
import AuthProvider from './components/provider/AuthProvider';
import CheckOut from './components/CheckOut';
import PrivetRouts from './routs/PrivetRouts';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/shop',
        element: <Shop></Shop>
      },
      {
        path:'/order',
        element:<Order/>,
        loader: cartProductsLoader
      },
      {
        path:'/inventory',
        element:<Inventory/>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element: <Signup></Signup>
      },
      {
        path:'/checkout',
        element:<PrivetRouts><CheckOut></CheckOut></PrivetRouts>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
