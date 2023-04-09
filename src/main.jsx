import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import OrderPage from './components/OrderPage/OrderPage';
import Root from './components/Root/Root';
import InventoryPage from './components/InventoryPage/InventoryPage';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import cartProductsLoader from './loader/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    // path: '*',
    // element: <div>This is 404 Page</div>,

    path: "/",
    element: <Root></Root>,
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
        element: <Checkout></Checkout>,
      },
      {
        path: '/inventory',
        element: <InventoryPage></InventoryPage>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>  // <App />
  /* </React.StrictMode>, */
)
