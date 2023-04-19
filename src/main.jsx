import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import OrderPage from './components/OrderPage/OrderPage';
import Root from './components/Root/Root';
import InventoryPage from './components/InventoryPage/InventoryPage';
import Shop from './components/Shop/Shop';
import cartProductsLoader from './loader/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <p>'hehe'</p>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: cartProductsLoader
      },
      {
        path: "/order",
        element: <OrderPage></OrderPage>,
        loader: cartProductsLoader
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      },
      {
        path: '/inventory',
        element: <PrivateRoute><InventoryPage></InventoryPage></PrivateRoute>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
