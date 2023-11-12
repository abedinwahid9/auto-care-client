/* eslint-disable react/prop-types */

const MycartCard = ({ car, handleDeletebtn }) => {
  const { _id, photoUrl, productName, typeName, category, rating, price } = car;

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
      <div>
        <div>
          <button
            onClick={() => handleDeletebtn(_id)}
            className="hover:bg-textColors text-primaryColors font-bold w-full bg-btnColors h-12"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MycartCard;
