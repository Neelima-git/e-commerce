import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>
  },
  {
    path: '/cart',
    element: <CartPage></CartPage>
  },
  {
    path: '/checkout',
    element: <Checkout></Checkout>
  },
  {
    path: 'product-detail',
    element: <ProductDetailPage></ProductDetailPage>
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
