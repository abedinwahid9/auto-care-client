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
import ViewDetails from "./component/Pages/ViewDetails/ViewDetails.jsx";
import Error from "./component/Pages/Error/Error.jsx";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute.jsx";
import AuthContext from "./AuthContext/AuthContext.jsx";
import LoginRoute from "./component/PrivateRoute/LoginRoute.jsx";
import UpdateProducts from "./component/Pages/AddProducts/UpdateProduct.jsx";
import MyCart from "./component/Pages/MyCart/MyCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("/brands.json"),
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <LoginRoute>
            <Login></Login>
          </LoginRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <LoginRoute>
            <SignUp></SignUp>
          </LoginRoute>
        ),
      },
      {
        path: "/cars/:category",
        element: <Brands></Brands>,
      },
      {
        path: "/cars/category/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/cars/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
