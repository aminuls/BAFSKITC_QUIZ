import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Join from "../pages/Join/Join";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout></Layout>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/quiz",
            element: (
               <PrivetRoute>
                  <Quiz></Quiz>
               </PrivetRoute>
            ),
         },
         {
            path: "/about",
            element: <About></About>,
         },
         {
            path: "/contact",
            element: <Contact></Contact>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/join",
            element: <Join></Join>,
         },
      ],
   },
]);
