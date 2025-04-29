import { Routes, Route } from 'react-router-dom';
import Admin from '../pages/Home';
import Avalability from '../pages/About';
import Booking from '../pages/Contact';
import Dashboard from '../pages/NotFound';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/avalability" element={<Avalability />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;