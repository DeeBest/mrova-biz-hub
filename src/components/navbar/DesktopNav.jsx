import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DesktopNav = () => {
  return (
    <ul className="desktop-nav nav">
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
export default DesktopNav;
