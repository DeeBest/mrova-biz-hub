import './foodies.css';

import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';

const Foodies = () => {
  const { businesses, isLoading } = useContext(Context);

  const foodBusinesses = businesses.filter(
    (business) => business.category === 'food'
  );

  return (
    <main>
      <div className="content-div">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="page-heading">Foodies Spot</h1>
            <div className="business-cards-div">
              {foodBusinesses.map((business) => {
                return <BusinessCard business={business} key={business._id} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default Foodies;
