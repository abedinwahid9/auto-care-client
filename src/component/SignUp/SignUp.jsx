import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url(https://i.ibb.co/3TsRfGM/451786.jpg)" }}
    >
      <div className="flex flex-col items-center md:w-2/4 bg-[#46464459] p-10 rounded-2xl ">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold mb-5">
          Signup Here
        </h2>
        <div className="divider"></div>
        <form className="w-3/4 space-y-5 ">
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent focus:outline-none p-4 text-base-200 placeholder-primaryColors "
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent focus:outline-none p-4 text-base-200 placeholder-primaryColors "
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent focus:outline-none p-4 text-base-200 placeholder-primaryColors "
              type="text"
              placeholder="Enter Your Photo Url"
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full placeholder-primaryColors bg-transparent focus:outline-none p-4 text-base-200"
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <input
            className="btn hover:bg-none bg-btnColors border-none text-[white] w-full text-base font-medium"
            type="submit"
            value="Signup"
          />
        </form>
        <h2 className="text-textColors text-lg font-medium mt-4">
          Already have an account ?{" "}
          <Link to="/login" className="text-btnColors underline">
            Login
          </Link>
        </h2>
        <div className="mt-5 flex justify-center items-center">
          <h2 className="text-textColors text-lg font-medium  mr-4">
            Signup with:
          </h2>
          <div>
            <FcGoogle className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
