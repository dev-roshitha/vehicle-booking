import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <NavLink className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" to="/admin-login">Admin</NavLink>
      <NavLink className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" to="/booking">Book A Vehicle</NavLink>
  </nav>
  );
};

export default NavBar;