import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react"; // Import useState
import { AuthProvider } from "../../../AuthContext/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { signInUser, googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate();

  // Add state for error message
  const [errorMessage, setErrorMessage] = useState(null);

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
        console.log(error.message);

        setErrorMessage("Incorrect password. Please try again.");
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
        // Set the error message here
        setErrorMessage("Google Login Failed");
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
          {errorMessage && (
            <p className="text-[#ff3030] text-sm font-bold">{errorMessage}</p>
          )}
          <input
            className="btn bg-btnColors border-none text-[white] w-full text-base font-medium"
            type="submit"
            value="Login"
          />
        </form>
        <h2 className="text-textColors text-lg font-medium mt-5">
          Create a New Account?{" "}
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
