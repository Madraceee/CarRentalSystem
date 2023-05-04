import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Catalog from "./pages/Catalog/Catalog";
import UserProfile from "./pages/UserProfile/UserProfile";
import UploadLising from "./pages/UploadListing/UploadListing";

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
    },
    {
      path: "/userprofile",
      element: <UserProfile />
    },
    {
      path: "/uploadlisting",
      element: <UploadLising />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
