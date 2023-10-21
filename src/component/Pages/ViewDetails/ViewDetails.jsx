import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthProvider } from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const [data, setDatas] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const id = useParams();
  const { user } = useContext(AuthProvider);
  console.log(user.email);
  const {
    photoUrl,
    productName,
    typeName,
    category,
    rating,
    price,
    description,
  } = data;
  const cartData = {
    email: user.email,
    photoUrl: data.photoUrl,
    productName: data.productName,
    typeName: data.typeName,
    category: data.category,
    rating: data.rating,
    price: data.price,
    description: data.descriptionL,
  };
  const handleCart = () => {
    console.log(cartData);
    fetch("http://localhost:5000/cars/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("cars add cart ");
        }
      })
      .catch((error) => {
        if (error.message == "Failed to fetch") {
          Swal.fire("this item already add");
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://cars-server-had06hfdt-abedinwahid9.vercel.app/cars/category/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setisLoading(true);
        setDatas(data);
        setisLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        ) &&
        data && (
          <div>
            <div className="lg:h-[650px] md:h-[400px] h-[200px] rounded-lg overflow-hidden">
              <div
                className="bg-cover bg-center w-full h-full flex items-end"
                style={{
                  backgroundImage: `url(${photoUrl})`,
                }}
              >
                <div className="bg-[#0b0b0b80] w-full py-7 pl-7">
                  <button
                    onClick={handleCart}
                    className="bg-btnColors md:px-5 md:py-3 px-4 py-2 text-[#fff] font-semibold  rounded"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="my-10 md:px-6 px-2">
              <h2 className="text-[#000] font-bold text-5xl">
                Modal: {productName}
              </h2>
              <h2 className="text-[#000] mt-2 font-bold text-3xl">
                Brand Name: {typeName}
              </h2>
              <p className="mt-2 text-secondaryTextColor text-base">
                <span className="font-semibold text-lg"> Type:</span> {category}
              </p>
              <h2 className="text-[#000] mt-2 font-bold text-xl">
                <span className="font-semibold text-lg"> Price:</span> ${price}
              </h2>
              <p className="mt-2 text-secondaryTextColor text-base">
                <span className="font-semibold text-lg">Rating:</span> {rating}
              </p>
              <p className="mt-2 text-secondaryTextColor text-base">
                <span className="font-semibold text-lg">Description:</span>{" "}
                {description}
              </p>
            </div>
          </div>
        )}
    </>
  );
};

export default ViewDetails;
