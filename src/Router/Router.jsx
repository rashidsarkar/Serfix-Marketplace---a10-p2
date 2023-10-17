import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";

import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/SignUp";

import NotFound from "../Pages/NotFound ";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },

      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
