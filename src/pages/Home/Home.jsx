import { Link } from "react-router-dom";

const Home = () => {
   const timeStart = new Date("October 19, 2023").getTime();
   // const timeEnd = new Date(2023, 9, 27, 20, 25).getTime();
   // const timeDiff = timeEnd - timeStart;
   return (
      <div className="text-center">
         <h2 className="text-4xl">Home Page is Coming Soon</h2>
         <h4 className="text-2xl mt-6">
            Go to <Link to="/quiz">Quiz Page</Link>
            {console.log(timeStart)}
         </h4>
      </div>
   );
};

export default Home;
