import './fashionRoom.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';

const FashionRoom = () => {
  const { businesses, isLoading } = useContext(Context);

  const fashionBusinesses = businesses.filter(
    (business) => business.category === 'fashion'
  );

  return (
    <main>
      <div className="content-div">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="page-heading">Fashion Room</h1>
            <div className="business-cards-div">
              {fashionBusinesses.map((business) => {
                return <BusinessCard business={business} key={business._id} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default FashionRoom;
