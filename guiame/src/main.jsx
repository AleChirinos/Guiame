import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PrincipalPage from './pages/PrincipalPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import WorkShopPage from './pages/WorkShopPage.jsx';
import UniversityPage from './pages/UniversityPages.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import PremiumPage from './pages/PremiumPage.jsx';
import TestPage from './pages/TestPage.jsx';
import PaginaAptitudes from './pages/PaginaAptitudes.jsx';
import TestPremiumPage from './pages/TestPremiumPage.jsx';
import CarreraPage from './pages/CarreraPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },{
    path: "/registro",
    element: <RegisterPage />,
  },{
    path: "/principal",
    element: <PrincipalPage />,
  },{
    path: "/calendar",
    element: <CalendarPage />,
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
  },{
    path: "/test/test1",
    element: <PaginaAptitudes />,
  },{
    path: "/testPremium",
    element: <TestPremiumPage />,
  },{
    path: "/carrera/:carreraId",
    element: <CarreraPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
