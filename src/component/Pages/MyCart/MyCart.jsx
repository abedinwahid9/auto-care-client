import MycartCard from "../../Card/MycartCard";

const MyCart = () => {
  return (
    <div className="md:px-6 px-2 my-5">
      <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold my-8">
        My Cart
      </h2>
      <div className="divider w-3/4 mx-auto"></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <MycartCard></MycartCard>
      </div>
    </div>
  );
};

export default MyCart;
