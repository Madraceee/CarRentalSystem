import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Catalog from "./pages/Catalog/Catalog"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/catalog",
      element: <Catalog />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
