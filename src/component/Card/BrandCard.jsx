/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandCard = ({ item }) => {
  const { id, name, img } = item;

  return (
    <Link to={`/${id}`}>
      <div
        className="card h-72  shadow-xl image-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="">
          <h2 className="text-[#000] text-3xl font-bold text-center pt-2">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
