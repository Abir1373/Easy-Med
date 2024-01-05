import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import App from './App.jsx';
import DoctorProfile from './Components/DoctorsPage/DoctorProfile.jsx';
import ChooseService from './Components/Appointment/ChooseService.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/appointment",
        element: <ChooseService />
      },
      {
        path: "/doctors/:id",
        element: <DoctorProfile />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
