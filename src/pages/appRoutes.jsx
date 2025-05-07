import { Routes, Route } from 'react-router-dom';
import Admin from './admin';
import Avalability from './avalability';
import Booking from './booking';
import Dashboard from './dashboard';
import NavBar from '../components/navbar'


function AppRoutes(){
  return (
    <Routes>
      {/* <NavBar/> */}
      <Route path="/admin-login" element={<Admin />} />
      <Route path="/booking/avalability" element={<Avalability />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;