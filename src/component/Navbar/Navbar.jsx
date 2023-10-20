import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthProvider);

  const handleLogout = () => {
    signOutUser()
      .then((result) => console.log("logout", result))
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <NavLink className="mr-4 text-lg font-bold " to="/">
        Home
      </NavLink>
      <NavLink className="mr-4 text-lg font-bold " to="/addproducts">
        Add Product
      </NavLink>
      <NavLink className="mr-4 text-lg font-bold " to="/mycart">
        My Cart
      </NavLink>
      {!user && (
        <NavLink className="text-lg font-bold " to="/login">
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar md:px-6 p-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-btnColors md:hidden outline-none border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="p-3">
          <img
            className="w-28 h-16 "
            src="https://i.ibb.co/C9QFQBb/628579252f90b-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-textColors ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user.displayName}
                  <span className="badge">New</span>
                </a>
              </li>

              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
