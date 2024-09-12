import './hygiene.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';

const Hygiene = () => {
  const { businesses, isLoading } = useContext(Context);

  const hygieneBusinesses = businesses.filter(
    (business) => business.category === 'hygiene'
  );

  return (
    <main>
      <div className="content-div">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="page-heading">Hygiene & Beauty</h1>
            <div className="business-cards-div">
              {hygieneBusinesses.map((business) => {
                return <BusinessCard business={business} key={business._id} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default Hygiene;
