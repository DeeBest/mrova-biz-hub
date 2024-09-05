import './footer.css';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Logo />
      <small>
        All Rights Reserved || &copy;MrovaBizHub {new Date().getFullYear()}
      </small>
      <div className="main-footer-div">
        <div className="icons-container">
          <Link to="https://github.com/DeeBest">
            <FaGithub className="icon" />
          </Link>
          <Link to="mailto:simphiwedladla8@gmail.com">
            <FaEnvelope className="icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/">
            <FaLinkedin className="icon" />
          </Link>
        </div>
        <p>Developed and maintained by Simphiwe.</p>
      </div>
    </footer>
  );
};
export default Footer;
