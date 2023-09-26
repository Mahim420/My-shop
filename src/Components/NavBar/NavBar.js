import React, { useContext } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
import { AuthContext } from "../../UserContext/UserContext";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <section className="w-full">
      <div className="justify-center flex items-center text-center">
        <div className=" navbar bg-opacity-80 px-11">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case">
              <img className="w-28 h-12" src={logo} alt="" />
            </a>
            <div className=" border  rounded">
              <input
                type="text"
                placeholder="Search your destination"
                className="input bg-black/20 text-white input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" className="text-xl font-semibold text-white">
                  News
                </Link>
              </li>
              <li>
                <Link className="text-xl font-semibold text-white">
                  Destination
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xl font-semibold text-white">
                  Blog
                </Link>
              </li>

              <li>
                <Link className="text-xl font-semibold text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <span className="me-3 font-semibold text-white">{user?.displayName}</span>
            {user?.uid ? (
              <button onClick={handleLogOut} className="text-white">
                <BsArrowBarRight size={40}></BsArrowBarRight>
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-active text-white btn-ghost">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-active ml-3 text-white btn-ghost">
                    Registration
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
