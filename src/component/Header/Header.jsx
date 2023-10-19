import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const location = useLocation();

  const bgImg =
    location.pathname == "/"
      ? {
          backgroundImage:
            "url(https://i.ibb.co/rsfTphT/sports-car-races-through-dark-blurred-motion-generative-ai-min.jpg)",
        }
      : { backgroundColor: "#111111" };

  return (
    <div
      className="h-full bg-no-repeat bg-cover bg-center shadow-xl"
      style={bgImg}
    >
      <Navbar></Navbar>
      {location.pathname == "/" ? (
        <div className="text-center  text-[#fff] font-extrabold lg:text-5xl md:text-3xl text-2xl lg:pb-40 md:pb-28 pb-20 lg:pt-28 md:pt-18 pt-10  md:px-6 px-2">
          <h1 className="mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Unleash the Power of Performance!
          </h1>
          <p className="drop-shadow-[0_35px_35px_rgba(0,0,0,15)]">
            Explore our collection of high-performance vehicles
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
