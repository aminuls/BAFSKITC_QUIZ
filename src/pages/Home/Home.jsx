import { Link } from "react-router-dom";
import Timer from "../../components/Timer/Timer";

const Home = () => {
   return (
      <div className="text-center">
         <h2 className="text-4xl">Home Page is Coming Soon</h2>
         <h4 className="text-2xl mt-6">
            Go to <Link to="/quiz">Quiz Page</Link>
            {/* <Timer></Timer> */}
         </h4>
      </div>
   );
};

export default Home;
