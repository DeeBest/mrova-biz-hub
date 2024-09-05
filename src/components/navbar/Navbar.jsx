import './navbar.css';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Context } from '../../context/context';

import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';

const Navbar = () => {
  const { setIsActive, isActive } = useContext(Context);

  return (
    <nav>
      <DesktopNav />
      <FaBars
        className="nav-icon bars"
        onClick={() => setIsActive(!isActive)}
      />
      <MobileNav />
    </nav>
  );
};
export default Navbar;
