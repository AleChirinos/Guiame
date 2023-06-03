import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PrincipalPage from './pages/PrincipalPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import CalendarioPage from './pages/CalendarioPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import WorkShopPage from './pages/WorkShopPage.jsx';
import UniversityPage from './pages/UniversityPages.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import PremiumPage from './pages/PremiumPage.jsx';
import TestPage from './pages/TestPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },{
    path: "/register",
    element: <RegisterPage />,
  },{
    path: "/principal",
    element: <PrincipalPage />,
  },{
    path: "/calendar",
    element: <CalendarioPage />,
  },{
    path: "/profile",
    element: <ProfilePage />,
  },{
    path: "/workshops",
    element: <WorkShopPage />,
  },{
    path: "/university",
    element: <UniversityPage />,
  },{
    path: "/results",
    element: <ResultsPage />,
  },{
    path: "/premium",
    element: <PremiumPage />,
  },{
    path: "/test",
    element: <TestPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
