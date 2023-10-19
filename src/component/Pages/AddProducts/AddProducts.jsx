import Swal from "sweetalert2";

const AddProducts = () => {
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

    console.log(newProduct);

    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("cars success add");
          form.reset();
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
          Add products
        </h2>
        <form onSubmit={handleAddProducts} className="space-y-5 ">
          <div className="bg-textColors w-full h-10 flex rounded-lg">
            <input
              required
              className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
              type="text"
              name="photoUrl"
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
                placeholder=" Products Name"
              />
            </div>
            <div className="bg-textColors h-10 flex rounded-lg flex-grow">
              <input
                required
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="text"
                name="typeName"
                placeholder="Type Name "
              />
            </div>
          </div>
          <div className="flex  md:flex-row flex-col gap-5">
            <div className="md:w-2/4 h-10 bg-textColors rounded-lg p-3">
              <select
                name="category"
                className="flex bg-transparent w-full h-full focus:outline-none"
              >
                <option disabled selected>
                  Brand
                </option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
                <option>Chevrolet</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
              </select>
            </div>
            <div className="bg-textColors h-10 flex rounded-lg md:w-2/4">
              <input
                required
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="number"
                name="price"
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
              placeholder="short descripiton"
            ></textarea>
          </div>
          <div className="bg-textColors w-1/5 h-10 flex rounded-lg flex items-center justify-between p-3 gap-4">
            <label>Rating: </label>
            <input
              required
              className="w-full text-center bg-transparent focus:outline-none"
              type="number"
              min="1"
              max="5"
              name="rating"
              placeholder="rating"
              defaultValue={1}
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

export default AddProducts;
