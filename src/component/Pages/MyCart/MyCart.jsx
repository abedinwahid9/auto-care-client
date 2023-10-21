import { useContext, useEffect, useState } from "react";
import MycartCard from "../../Card/MycartCard";
import { AuthProvider } from "../../../AuthContext/AuthContext";
// /cars/cart/email/:email

const MyCart = () => {
  const { user } = useContext(AuthProvider);
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cars/cart/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setCars(data);
        setIsLoading(false);
      });
  }, [user.email]);

  return (
    user && (
      <div className="md:px-6 px-2 my-5">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold my-8">
          My Cart
        </h2>
        <div className="divider w-3/4 mx-auto"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {!isLoading && (
            <span className="loading loading-spinner loading-lg"></span>
          ) &&
          cars &&
          cars.length === 0 ? (
            <h2 className="font-bold text-2xl">Data not found</h2>
          ) : (
            cars?.map((car) => {
              return <MycartCard key={car._id} car={car}></MycartCard>;
            })
          )}
        </div>
      </div>
    )
  );
};

export default MyCart;
