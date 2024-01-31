import './App.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Netflix from './pages/Netflix';
import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Netflix/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
