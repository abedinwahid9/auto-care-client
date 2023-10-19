import { Link } from "react-router-dom";

const BrandCard = () => {
  return (
    <Link to="/:id">
      <div className="card  shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/M5mQywH/1997-BMW-logo-640x480.webp"
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="text-btnColors text-3xl font-bold text-center pt-2">
            Toyota
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
