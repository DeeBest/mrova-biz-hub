import './carMechanics.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';

const CarMechanics = () => {
  const { businesses, isLoading } = useContext(Context);

  const mechanicsBusinesses = businesses.filter(
    (business) => business.category === 'mechanics'
  );

  return (
    <main>
      <div className="content-div">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="page-heading">Car Mechanics</h1>
            <div className="business-cards-div">
              {mechanicsBusinesses.map((business) => {
                return <BusinessCard business={business} key={business._id} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default CarMechanics;
