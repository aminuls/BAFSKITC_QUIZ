import { Link } from "react-router-dom";

const About = () => {
   return (
      <div className="text-center">
         <h2 className="text-4xl">About Page is Coming Soon</h2>
         <h4 className="text-2xl mt-6">
            Go to <Link to="/quiz">Quiz Page</Link>
         </h4>
      </div>
   );
};

export default About;
