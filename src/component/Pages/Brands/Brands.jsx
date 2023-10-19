import CarsCard from "../../Card/CarsCard";
import Carousel from "./Carousel";

const Brands = () => {
  return (
    <div>
      <Carousel></Carousel>
      <div className="my-10 md:px-6 px-2">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold ">
          Honda
        </h2>
        <div className="divider w-3/4 mx-auto"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <CarsCard></CarsCard>
        </div>
      </div>
    </div>
  );
};

export default Brands;
