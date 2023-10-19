import { Link } from "react-router-dom";

const CarsCard = () => {
  return (
    <div className="overflow-hidden  h-full card  glass justify-between">
      <figure className="h-2/4">
        <img
          className="h-full w-full"
          src="https://i.ibb.co/rsfTphT/sports-car-races-through-dark-blurred-motion-generative-ai-min.jpg"
          alt="car!"
        />
      </figure>
      <div className="p-4 h-2/4 ">
        <h2 className="text-xl font-bold mb-2">name</h2>
        <h2 className="text-base font-bold mb-2">Brand Name: Toyota</h2>
        <h2 className=" font-bold mb-1">Type: Car</h2>
        <h2 className=" font-bold mb-1">Pirce: $2500.05</h2>
        <p className="text-primaryThreeColor mb-1">rating: 4</p>
      </div>
      <div className=" flex ">
        <div className="w-2/4">
          <Link to="/:id">
            <button className="hover:bg-textColors text-primaryColors font-bold w-full bg-btnColors h-12 ">
              View details
            </button>
          </Link>
        </div>

        <div className="w-2/4">
          <Link to="/:id">
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
