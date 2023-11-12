/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const [cardata, setCardata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  console.log();

  useEffect(() => {
    fetch(
      `https://cars-server-cm7hjjrkh-abedinwahid9.vercel.app/cars/category/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setCardata(data);
        setIsLoading(false);
      });
  }, [params.id]);

  const handleSelectOption = (e) => {
    const newCategory = e.target.value;
    setCardata({ ...cardata, category: newCategory });
  };

  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;

    const photoUrl = form.photoUrl.value;
    const productName = form.ProductsName.value;
    const typeName = form.typeName.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      photoUrl,
      productName,
      typeName,
      category,
      price,
      description,
      rating,
    };

    fetch(
      `https://cars-server-cm7hjjrkh-abedinwahid9.vercel.app/cars/update/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("cars update success ");
          navigate(`/cars/category/${params.id}`);
        }
      });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center"
      style={{ backgroundImage: "url(https://i.ibb.co/N9hDqdt/peakpx-1.jpg)" }}
    >
      <div className="w-3/4">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold mb-8">
          Update products : {cardata.productName}
        </h2>
        <form onSubmit={handleAddProducts} className="space-y-5 ">
          <div className="bg-textColors w-full h-10 flex rounded-lg">
            <input
              required
              className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
              type="text"
              name="photoUrl"
              defaultValue={cardata.photoUrl}
              placeholder=" Photo Url"
            />
          </div>
          <div className="flex  md:flex-row flex-col gap-5">
            <div className="bg-textColors h-10 flex rounded-lg flex-grow">
              <input
                required
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="text"
                name="ProductsName"
                defaultValue={cardata.productName}
                placeholder=" Products Name"
              />
            </div>
            <div className="bg-textColors h-10 flex rounded-lg flex-grow">
              <input
                required
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="text"
                name="typeName"
                defaultValue={cardata.typeName}
                placeholder="Type Name "
              />
            </div>
          </div>
          <div className="flex  md:flex-row flex-col gap-5">
            <div className="md:w-2/4 h-10 bg-textColors rounded-lg p-3">
              <select
                value={cardata.category}
                onChange={(e) => {
                  handleSelectOption();
                }}
                name="category"
                className="flex bg-transparent w-full h-full focus:outline-none"
              >
                <option disabled>Brand</option>
                <option value="Toyota"> Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
              </select>
            </div>
            <div className="bg-textColors h-10 flex rounded-lg md:w-2/4">
              <input
                required
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="number"
                name="price"
                defaultValue={cardata.price}
                placeholder="Products Price"
              />
            </div>
          </div>
          <div className="bg-textColors  flex rounded-lg">
            <textarea
              className="bg-transparent p-3 placeholder-primaryColors"
              name="description"
              cols="100"
              rows="6"
              defaultValue={cardata.description}
              placeholder="short descripiton"
            ></textarea>
          </div>
          <div className="bg-textColors w-1/5 h-10 rounded-lg flex items-center justify-between p-3 gap-4">
            <label>Rating: </label>
            <input
              required
              className="w-full text-center bg-transparent focus:outline-none"
              type="number"
              min="1"
              max="5"
              name="rating"
              placeholder="rating"
              defaultValue={cardata.rating}
            />
          </div>
          <input
            className="btn hover:bg-none bg-btnColors border-none text-[white] w-full text-base font-medium"
            type="submit"
            defaultValue="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
