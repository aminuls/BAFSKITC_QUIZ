import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
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
            element: <Quiz></Quiz>,
         },
         {
            path: "/about",
            element: <About></About>,
         },
         {
            path: "/contact",
            element: <Contact></Contact>,
         },
      ],
   },
]);
