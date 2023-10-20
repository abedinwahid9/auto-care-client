import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div
      className=" flex flex-col items-center mt-32 
    "
    >
      <img
        src="https://i.ibb.co/Y3DrjGS/vecteezy-404-landing-page-6549647.jpg"
        alt=""
      />

      <p className="mt-4">Here is helpful link:</p>
      <NavLink rel="stylesheet" href="/home">
        home
      </NavLink>
    </div>
  );
};

export default Error;
