import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-4">
      {/* Logo  */}
      <Link to='/'><img src={assets.logo} className="w-30 sm:w-40" alt="" /></Link>

      {/* Menu Buttons  */}
      <ul className="sm:flex text-gray-700 text-sm font-medium gap-5 hidden">
        <NavLink to="/" className="flex flex-col items-center gap-1 uppercase">
          <p>Home</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>Collection</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>About</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>Contact</p>
          <hr className="w-2/4 bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
      </ul>

      {/* Right Buttons  */}
      <div className="flex items-center gap-7">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute right-0 py-2">
            <div className="flex flex-col gap-2 px-3 py-2 w-30 text-gray-500 bg-slate-100 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
          <p className="absolute w-4 bg-black text-white text-center -right-1.25 -bottom-1.25 text-[9px] rounded-full leading-4">
            10
          </p>
        </Link>
        {/* Menu for icon small screens  */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Menu for small screens  */}
      <div
        className={`absolute top-0 right-0 overflow-hidden transition-all bg-white ${visible ? "w-full" : "w-0"} `}
      >
        <div className="flex flex-col text-gray-500">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180 cursor-pointer"
              alt=""
            />
            <p className="text-[18px] cursor-pointer">Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-8 border-b font-semibold text-sm">Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/collection" className="py-2 pl-8 border-b font-semibold text-sm">Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/about" className="py-2 pl-8 border-b font-semibold text-sm">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/contact" className="py-2 pl-8 border-b font-semibold text-sm">Contact</NavLink>

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
