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
import axios from 'axios';

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
import RegistrationLayout from './Components/registration/RegistrationLayout.jsx';
import FirstRegistration from './Components/registration/firstregistration/FirstRegistration.jsx';
import SecondRegistration from './Components/registration/secondregistration/SecondRegistration.jsx';
import DoctorAppointment from './Components/dashboard/doctorappointment/DoctorAppointment.jsx';
import DoctorPaymentHistory from './Components/dashboard/doctorPaymentHistory/DoctorPaymentHistory.jsx';
import Doctorpage from './Components/Doctors/Doctorpage.jsx';
import MakeAppointment from './Components/Appointment/MakeAppointment.jsx';
<<<<<<< HEAD
import EditProfile from './Components/dashboard/editprofile/EditProfile.jsx';

=======
import EditDoctorProfile from './Components/dashboard/editdoctorprofile/EditDoctorProfile.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import MakePrescription from './Components/dashboard/prescription/MakePrescription.jsx';
>>>>>>> 302b90d6dcf3d78264a345068fa059f8a88b114d





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
        path: 'about',
        element: <About></About>
      },
      {
        path: "/appointment",
        element: <ChooseService />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "prescription/:email",
        element: <MakePrescription></MakePrescription>,
        loader: async ({ params }) => {
          const res = params.email
          return res;
        }
      },
      {
        path: "/doctors/:id",
        element: <DoctorProfile />
      },
      {
        path: "/appointment/:id",
        element: <PrivateRoute><MakeAppointment /></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await axios.get(`http://localhost:5000/doctors?_id=${params.id}`)
          console.log(res.data)
          return res.data;
        }
      },
      {
        path: "/doctors",
        element: <Doctorpage />,
        loader: async () => {
          const res = await axios.get(`http://localhost:5000/doctors`)
          console.log(res.data)
          return res.data
        }
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/services/:speciality",
        element: <ShowDoctors />,
        loader: async ({ params }) => {
          const res = await axios.get(`http://localhost:5000/speciality?speciality=${params.speciality}`)
          console.log(res.data)
          return res.data
        }
      }
    ],
  },
  {
    path: "dboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "dbmain",
        element: <DbMain></DbMain>,
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
      {
        path: "doctorappointment",
        element: <DoctorAppointment />,
      },
      {
        path: "doctorpaymenthistory",
        element: <DoctorPaymentHistory />
      },
      {
        path: "editprofile",
        element: <EditProfile />
      },
    ],
  },
  {
    path: '/registration',
    element: <RegistrationLayout />,
    children: [
      {
        path: "firstregistration",
        element: <FirstRegistration />
      },
      {
        path: "secondregistration",
        element: <SecondRegistration />
      },
    ],
  },
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
