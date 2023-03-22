import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Donation from "../../pages/Donation/Donation";
import DonationForm from "../../pages/DonationForm/DonationForm";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

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
        element: <Donation></Donation>,
      },
      {
        path: '/donationForm/:id',
        element: <DonationForm></DonationForm>
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);