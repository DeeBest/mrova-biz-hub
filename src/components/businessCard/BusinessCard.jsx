/* eslint-disable react/prop-types */
import './businessCard.css';

import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const BusinessCard = ({ business }) => {
  return (
    <section className="business-card">
      <div className="card-header-body-div">
        <div className="card-header">
          <h1>{business.businessName}</h1>
          <img src={business.imageUrl} alt="business-image" />
        </div>
        <div className="card-body">
          <h4>Who We Are?</h4>
          <p>{business.businessDescription}</p>
          <h4>Our Operating Hours</h4>
          <div className="operating-hours-div">
            <p>
              From:{' '}
              <span className="opening-time-span">{business.openingTime}</span>
            </p>
            <p>
              Until:{' '}
              <span className="closing-time-span">{business.closingTime}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <h4>Contact Us</h4>
        <div className="contacts-div">
          <p>
            {' '}
            <FiPhone className="icon" />
            {business.phoneNumber}{' '}
          </p>
          <p>
            <MdOutlineEmail className="icon" /> {business.email}{' '}
          </p>
        </div>
        <p>
          <IoLocationOutline className="icon" /> {business.location}
        </p>
      </div>
    </section>
  );
};
export default BusinessCard;
