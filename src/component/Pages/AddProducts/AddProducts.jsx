const AddProducts = () => {
  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;

    const photoUrl = form.photoUrl.value;
    const productName = form.ProductsName.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = {
      photoUrl,
      productName,
      brandName,
      category,
      price,
      description,
      rating,
    };

    console.log(newProduct);
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
              className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
              type="text"
              name="photoUrl"
              placeholder=" Photo Url"
            />
          </div>
          <div className="flex  md:flex-row flex-col gap-5">
            <div className="bg-textColors h-10 flex rounded-lg flex-grow">
              <input
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="text"
                name="ProductsName"
                placeholder=" Products Name"
              />
            </div>
            <div className="bg-textColors h-10 flex rounded-lg flex-grow">
              <input
                className="p-3 bg-transparent w-full focus:outline-none placeholder-primaryColors "
                type="text"
                name="brandName"
                placeholder="Brand Name "
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
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className="bg-textColors h-10 flex rounded-lg md:w-2/4">
              <input
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
