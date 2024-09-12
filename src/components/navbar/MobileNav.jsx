import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FaHome, FaTimes } from 'react-icons/fa';

import { Context } from '../../context/context';

const MobileNav = () => {
  const { isActive, setIsActive } = useContext(Context);

  return (
    <ul className={isActive ? 'active mobile-nav nav' : 'mobile-nav nav'}>
      <li onClick={() => setIsActive(!isActive)}>
        <FaTimes className="nav-icon times" />
      </li>
      <li style={{ marginRight: 'auto', fontSize: '1.5rem' }}>
        <Link to="/">
          {' '}
          <FaHome />{' '}
        </Link>
      </li>
      <li>
        <Link to="/foodies">Foodies Spot</Link>
      </li>
      <li>
        <Link to="/hygiene">Hygiene & Beauty</Link>
      </li>
      <li>
        <Link to="/car-mechanics">Car Mechanics</Link>
      </li>
      <li>
        <Link to="/fashion-room">Fashion Room</Link>
      </li>
      <li>
        <Link to="/financial-services">Financial Services</Link>
      </li>
      <li>
        <Link to="/rooms-rentals">Rooms Rental</Link>
      </li>
    </ul>
  );
};
export default MobileNav;
