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
        path:'order',
        element:<Order/>,
        loader: cartProductsLoader
      },
      {
        path:'inventory',
        element:<Inventory/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
