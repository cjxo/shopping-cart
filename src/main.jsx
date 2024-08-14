import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ShopPage from './routes/ShopPage.jsx';
import Homepage from './routes/Homepage.jsx';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ShoppingCart from './routes/ShoppingCartPage.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "shop/",
          element: <ShopPage />
        },
        {
          path: "shopping-cart/",
          element: <ShoppingCart />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
