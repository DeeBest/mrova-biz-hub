import './logo.css';
import { FaBookBookmark } from 'react-icons/fa6';

const Logo = () => {
  return (
    <div className="logo-div">
      <FaBookBookmark className="logo-icon" />
      <h1>
        <span className="colored-letters">M</span>rova
        <span className="colored-letters">B</span>iz
        <span className="colored-letters">H</span>ub
      </h1>
    </div>
  );
};
export default Logo;
