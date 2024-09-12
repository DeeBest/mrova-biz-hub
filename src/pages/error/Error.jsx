import './error.css';

import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <main>
      <div className="content-div">
        <div className="error-page">
          <h1>404</h1>
          <FaExclamationTriangle className="icon" />
          <p>
            Page Not found <Link to="/">Go back home</Link>{' '}
          </p>
        </div>
      </div>
    </main>
  );
};
export default Error;
