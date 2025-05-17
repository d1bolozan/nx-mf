import { Outlet } from 'react-router-dom';
import { NavbarSearch } from './components/Navbar/Navbar';

const Layout = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <NavbarSearch />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
