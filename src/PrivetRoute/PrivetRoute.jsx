import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../components/Loading/Loading";

const PrivetRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <Loading></Loading>;
   }
   if (user?.uid) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
