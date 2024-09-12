import './roomsRentals.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';

const RoomsRentals = () => {
  const { businesses, isLoading } = useContext(Context);

  const roomsBusinesses = businesses.filter(
    (business) => business.category === 'rooms'
  );

  return (
    <main>
      <div className="content-div">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="page-heading">Rooms Rentals</h1>
            <div className="business-cards-div">
              {roomsBusinesses.map((business) => {
                return <BusinessCard business={business} key={business._id} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default RoomsRentals;
