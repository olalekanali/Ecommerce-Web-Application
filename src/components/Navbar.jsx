import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to="/" className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
        <NavLink to="/mens" className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdCategory />Men's</div></NavLink>
        <NavLink to="/womens" className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop2 />Women's</div></NavLink>
        <NavLink to="/kids" className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdContacts />Kid's</div></NavLink>
    </nav>
  );
};

export default Navbar;
