import './foodies.css';

import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';
import Spinner from '../../components/Spinner';

const Foodies = () => {
  const { businesses, isLoading } = useContext(Context);

  const foodBusinesses = businesses.filter(
    (business) => business.category === 'food'
  );

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="content-div">
          <>
            <h1 className="page-heading">Foodies Spot</h1>
            {foodBusinesses.length ? (
              <div className="business-cards-div">
                {foodBusinesses.map((business) => {
                  return (
                    <BusinessCard business={business} key={business._id} />
                  );
                })}
              </div>
            ) : (
              <h4 style={{ textShadow: '2px 2px 4px white' }}>
                Seems like there are no businesses for this category
              </h4>
            )}
          </>
        </div>
      )}
    </main>
  );
};
export default Foodies;
