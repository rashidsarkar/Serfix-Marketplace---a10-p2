import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./FireBase/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <AuthProvider>
  //     <RouterProvider router={router}></RouterProvider>
  //   </AuthProvider>
  //   {/* <RouterProvider router={router}></RouterProvider> */}
  // </React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
