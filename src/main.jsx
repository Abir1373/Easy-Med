import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import MainLayout from './Layouts/MainLayout.jsx';
import App from './App.jsx';
import DoctorProfile from './Components/DoctorsPage/DoctorProfile.jsx';
import ChooseService from './Components/Appointment/ChooseService.jsx';
import Login from './Components/Login.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import DbMain from './Components/dashboard/dbmain/DbMain.jsx';
import ManageDoctors from './Components/dashboard/managedoctors.jsx/ManageDoctors.jsx';
import AllUsers from './Components/dashboard/allusers/AllUsers.jsx';
import DashboardLayout from './Components/dashboard/DashboardLayout.jsx';
import AddADoctor from './Components/dashboard/addadoctor/AddADoctor.jsx';
import MyAppointments from './Components/dashboard/myappointments/MyAppointments.jsx';
import MyReviews from './Components/dashboard/myreviews/MyReviews.jsx';
import MyHistory from './Components/dashboard/myhistory/MyHistory.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import About from './Components/about/About.jsx';
import ShowDoctors from './Components/Appointment/ShowDoctors.jsx';
import Registration from './Components/registration/Registration.jsx';





const queryClient = new QueryClient()

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
        path: "/registration",
        element: <Registration />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/doctors/:id",
        element: <DoctorProfile />
      },
      {
        path: "appointment/:id",
        element: <MakeAppointment />,
        loader: async ({ params }) => {
          const res = fetch(`http://localhost:5000/doctors?_id=${params.id}`)
          return (await res).json();
        }
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/doctors",
        element: <Doctorpage />
      },
      {
        path: "/services/:speciality",
        element: <ShowDoctors />,
        loader: async ({ params }) => {
          const res = fetch(`http://localhost:5000/doctors/${params.speciality}`)
          return (await res).json();
        }
      }
    ],
  },
  {
    path: "dboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "dbmain",
        element: <DbMain></DbMain>
      },
      {
        path: "addadoctor",
        element: <AddADoctor />
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "managedoctors",
        element: <ManageDoctors></ManageDoctors>
      },
      {
        path: "myappointments",
        element: <MyAppointments></MyAppointments>
      },
      {
        path: "myreviews",
        element: <MyReviews></MyReviews>
      },
      {
        path: "myhistory",
        element: <MyHistory />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
