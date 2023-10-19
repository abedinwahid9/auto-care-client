import { Link } from "react-router-dom";

const CarsCard = (car) => {
  const { photoUrl, productName, typeName, category, rating, price } = car.car;

  console.log(car);
  return (
    <div className="overflow-hidden  h-full card  glass justify-between">
      <figure className="h-2/4">
        <img className="h-full w-full" src={photoUrl} alt="car!" />
      </figure>
      <div className="p-4 h-2/4 ">
        <h2 className="text-xl font-bold mb-2">{productName}</h2>
        <h2 className="text-base font-bold mb-2">Brand Name: {category}</h2>
        <h2 className=" font-bold mb-1">Type: {typeName}</h2>
        <h2 className=" font-bold mb-1">Pirce: ${price}</h2>
        <p className="text-primaryThreeColor mb-1">rating: {rating}</p>
      </div>
      <div className=" flex ">
        <div className="w-2/4">
          <Link to="/cars/category/:id">
            <button className="hover:bg-textColors text-primaryColors font-bold w-full bg-btnColors h-12 ">
              View details
            </button>
          </Link>
        </div>

        <div className="w-2/4">
          <Link to="/cars/category/:id">
            <button className="hover:bg-textColors text-primaryColors font-bold w-full bg-btnColors h-12">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
