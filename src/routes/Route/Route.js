import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Donation from "../../pages/Donation/Donation";
import DonationForm from "../../pages/DonationForm/DonationForm";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Payment from "../../pages/Payment/Payment";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: (
          <PrivateRoute>
            <Donation></Donation>
          </PrivateRoute>
        ),
      },
      {
        path: "/donationForm/:id",
        element: (
          <PrivateRoute>
            <DonationForm></DonationForm>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://khairah-charity-server.vercel.app/causes/${params.id}`
          );
        },
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/donation/:id",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: async ({ params }) => {
          return fetch(
            `https://khairah-charity-server.vercel.app/given/${params.id}`
          );
        },
      },
    ],
  },
]);
