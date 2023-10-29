import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const Layout = () => {
   return (
      <div className="min-h-screen flex flex-col justify-center items-center">
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Layout;
