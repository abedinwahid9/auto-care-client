import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthProvider } from "../../../AuthContext/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { signInUser, googleLogin } = useContext(AuthProvider);

  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlegoogleLogin = () => {
    googleLogin(provider)
      .then(() => {
        console.log("success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url(https://i.ibb.co/3TsRfGM/451786.jpg)" }}
    >
      <div className="flex flex-col items-center md:w-2/4 bg-[#46464459] p-10 rounded-2xl ">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold mb-5">
          Login Here
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleLoginForm} className="w-3/4 space-y-5 ">
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent placeholder-primaryColors focus:outline-none p-4 text-base-200"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent placeholder-primaryColors focus:outline-none p-4 text-base-200"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <input
            className="btn bg-btnColors border-none text-[white] w-full text-base font-medium"
            type="submit"
            value="login"
          />
        </form>
        <h2 className="text-textColors text-lg font-medium mt-5">
          Create an New Account?{" "}
          <Link to="/signup" className="text-btnColors underline">
            Signup
          </Link>
        </h2>{" "}
        <div className="mt-5 flex justify-center items-center">
          <h2 className="text-textColors text-lg font-medium  mr-4">
            Signup with:
          </h2>
          <div onClick={handlegoogleLogin}>
            <FcGoogle className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
