import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to="/" className="flexCenter gap-x-1"><MdHomeFilled />Home</NavLink>
        <NavLink to="/mens" className="flexCenter gap-x-1"><MdCategory />Men's </NavLink>
        <NavLink to="/womens" className="flexCenter gap-x-1"><MdShop2 />Women's</NavLink>
        <NavLink to="/kids" className="flexCenter gap-x-1"><MdContacts />Kid's</NavLink>
    </nav>
  );
};

export default Navbar;
