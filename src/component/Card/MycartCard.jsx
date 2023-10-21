/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
const MycartCard = (car) => {
  const { _id, photoUrl, productName, typeName, category, rating, price } =
    car.car;

  const handleDeletebtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://cars-server-cm7hjjrkh-abedinwahid9.vercel.app/mycart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

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
