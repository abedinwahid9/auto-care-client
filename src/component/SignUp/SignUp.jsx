import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const provider = new GoogleAuthProvider();
  const Auth = useContext(AuthProvider);

  const navgivate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const { createUser, loading, googleLogin } = Auth;

  const isPasswordValid = (password) => {
    if (password.length < 6) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one capital letter with no special characters."
      );
      return;
    }

    const emailForm = { name, email, photoUrl, password };

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating display name", error);
          });
        navgivate("/");
        loading(false);
      })
      .catch((err) => {
        console.error(err);
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
          Signup Here
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSignup} className="w-3/4 space-y-5 ">
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent focus:outline-none p-4 text-base-200 placeholder-primaryColors "
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent focus:outline-none p-4 text-base-200 placeholder-primaryColors "
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full bg-transparent focus:outline-none p-4 text-base-200 placeholder-primaryColors "
              type="text"
              name="photoUrl"
              placeholder="Enter Your Photo Url"
            />
          </div>
          <div className="bg-textColors h-12 flex rounded-lg">
            <input
              className="w-full placeholder-primaryColors bg-transparent focus:outline-none p-4 text-base-200"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          {isPasswordValid && (
            <div className="text-[#ff2f2f]">{passwordError}</div>
          )}

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
          <div onClick={handlegoogleLogin}>
            <FcGoogle className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
