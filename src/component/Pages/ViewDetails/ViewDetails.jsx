import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const [data, setDatas] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const id = useParams();

  const {
    photoUrl,
    productName,
    typeName,
    category,
    rating,
    price,
    description,
  } = data;

  useEffect(() => {
    fetch(
      `https://cars-server-cxudsoge0-abedinwahid9.vercel.app/cars/category/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setisLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        ) && (
          <div>
            <div className="lg:h-[650px] md:h-[400px] h-[200px] rounded-lg overflow-hidden">
              <div
                className="bg-cover bg-center w-full h-full flex items-end"
                style={{
                  backgroundImage: `url(${photoUrl})`,
                }}
              >
                <div className="bg-[#0b0b0b80] w-full py-7 pl-7">
                  <button className="bg-btnColors md:px-5 md:py-3 px-4 py-2 text-[#fff] font-semibold  rounded">
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
