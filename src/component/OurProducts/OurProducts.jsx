import BrandCard from "../Card/BrandCard";

const OurProducts = () => {
  return (
    <div className="py-10 md:px-6 px-2">
      <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold">
        Our Brands
      </h2>
      <div className="divider w-3/4 mx-auto"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
      </div>
    </div>
  );
};

export default OurProducts;
