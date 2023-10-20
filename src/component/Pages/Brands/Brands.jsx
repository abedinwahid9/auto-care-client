import CarsCard from "../../Card/CarsCard";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";

const Brands = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const catoegorys = useParams();

  useEffect(() => {
    fetch(
      `https://cars-server-cxudsoge0-abedinwahid9.vercel.app/cars/${catoegorys.category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Carousel></Carousel>
      <div className="my-10 md:px-6 px-2">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold ">
          {catoegorys.category}
        </h2>
        <div className="divider w-3/4 mx-auto"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
          {!isLoading && (
            <span className="loading loading-spinner loading-lg"></span>
          ) &&
          cars.length === 0 ? (
            <h2 className="font-bold text-2xl">Data not found</h2>
          ) : (
            cars?.map((car) => {
              return <CarsCard key={car._id} car={car}></CarsCard>;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;
