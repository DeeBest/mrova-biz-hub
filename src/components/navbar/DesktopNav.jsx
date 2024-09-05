import { Link } from 'react-router-dom';

const DesktopNav = () => {
  return (
    <ul className="desktop-nav nav">
      <li>
        <Link>Foodies</Link>
      </li>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Vehicle</Link>
      </li>
      <li>
        <Link>Fashion</Link>
      </li>
      <li>
        <Link>Entertainment</Link>
      </li>
      <li>
        <Link>Finances</Link>
      </li>
      <li>
        <Link>Rooms Rental</Link>
      </li>
    </ul>
  );
};
export default DesktopNav;
