import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Context } from '../../context/context';

const MobileNav = () => {
  const { isActive, setIsActive } = useContext(Context);

  return (
    <ul className={isActive ? 'active mobile-nav nav' : 'mobile-nav nav'}>
      <li onClick={() => setIsActive(!isActive)}>
        <FaTimes className="nav-icon times" />
      </li>
      <li>
        <Link>Foodies</Link>
      </li>
      <li>
        <Link>Home Maintenance</Link>
      </li>
      <li>
        <Link>Vehicle Maintenance</Link>
      </li>
      <li>
        <Link>Fashion Killas</Link>
      </li>
      <li>
        <Link>Entertainment</Link>
      </li>
      <li>
        <Link>Finances</Link>
      </li>
      <li>
        <Link>Room Rental</Link>
      </li>
    </ul>
  );
};
export default MobileNav;
