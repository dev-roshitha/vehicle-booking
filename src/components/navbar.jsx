import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav>
      <NavLink to="/dashboard" end>Dashboard</NavLink>
      <NavLink to="/admin-login">Admin</NavLink>
      <NavLink to="/booking">Book A Vehicle</NavLink>
      <NavLink to="/booking/avalability">Availability</NavLink>
  </nav>
  );
};

export default NavBar;