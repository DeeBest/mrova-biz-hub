import './fashionRoom.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';
import Spinner from '../../components/Spinner';

const FashionRoom = () => {
  const { businesses, isLoading } = useContext(Context);

  const fashionBusinesses = businesses.filter(
    (business) => business.category === 'fashion'
  );

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="content-div">
          <>
            <h1 className="page-heading">Fashion Room</h1>
            {fashionBusinesses.length ? (
              <div className="business-cards-div">
                {fashionBusinesses.map((business) => {
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
export default FashionRoom;
