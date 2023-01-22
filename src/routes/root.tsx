import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthWrapperComponent from "../views/auth/AuthWrapper.component";
import DashboardComponent from "../views/auth/Dashboard.component";
import TransactionsEPComponent from "../views/auth/TransactionsEP";
import LoginComponent from "../views/Login.component";
import OtpVerificationComponent from "../views/OtpVerification";
import SetProfileComponent from "../views/SetProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapperComponent />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardComponent />,
      },
      {
        path: "/transactions",
        element: <TransactionsEPComponent />,
      },
      {
        path: "/dashboard",
        element: <DashboardComponent />,
      },
      {
        path: "/dashboard",
        element: <DashboardComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/forgot-password",
    element: <LoginComponent />,
  },
  {
    path: "/signup",
    element: <LoginComponent />,
  },
  {
    path: "/verify-otp",
    element: <OtpVerificationComponent />,
  },
  {
    path: "/setup-profile",
    element: <SetProfileComponent />,
  },
]);
