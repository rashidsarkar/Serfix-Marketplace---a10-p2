import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FireBase/AuthProvider";
import { useContext } from "react";

function NavBar() {
  const { user, logOut } = useContext(AuthContext);

  // const user = false; // Replace with your actual authentication logic
  const handleSingOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  // console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#d54242] font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#d54242] font-semibold"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#d54242] font-semibold"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>

      <li></li>
    </>
  );

  return (
    <div className="left-0 right-0 z-50 w-full mx-auto rounded-b-none bg-slate-400  navbar ">
      <div className="w-full lg:w-[50%] navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="md:h-[70px] flex items-center ">
          {/* black  */}
          <img
            src="https://i.ibb.co/yPGT4WM/download.png"
            className="h-full"
            alt=""
          />
          {/* white  */}
          {/* <img src="https://i.ibb.co/vYVFLfj/download1.png" alt="" /> */}
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl font-semibold menuu menuu-horizontal">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          // User is authenticated, show user menu
          <div className="dropdown z-50  dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 w-[250px]  z-[99] p-2 shadow menu menu-sm  dropdown-content bg-base-100 rounded-box "
            >
              <li>
                <div className="flex flex-col px-4 py-3 ">
                  <span className="block text-sm text-[#d54242] dark:text-white">
                    {user.displayName || "Display Name"}
                  </span>
                  <span className="block text-sm text-[#d54242] truncate dark:text-gray-400">
                    {user.email || "Email"}
                  </span>
                </div>
              </li>

              <li className="mx-auto text-center text-[#d54242]">
                <Link onClick={handleSingOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          // User is not authenticated, show login button
          <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl text-white menuu menuu-horizontal">
            <li>
              <NavLink
                to="/Login"
                className="inline-block rounded bg-[#d54242] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#FF6347] hover:shadow-lg focus:bg-[#d54242] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d54242] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
