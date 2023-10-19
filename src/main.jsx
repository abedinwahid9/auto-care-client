import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Pages/Home/Home.jsx";
import AddProducts from "./component/Pages/AddProducts/AddProducts.jsx";
import Login from "./component/Pages/Login/Login.jsx";
import Brands from "./component/Pages/Brands/Brands.jsx";
import SignUp from "./component/SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("brands.json"),
      },
      {
        path: "/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/mycart",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/:id",
        element: <Brands></Brands>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
