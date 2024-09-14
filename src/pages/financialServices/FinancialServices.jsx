import './financialServices.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';
import Spinner from '../../components/Spinner';

const FinancialServices = () => {
  const { businesses, isLoading } = useContext(Context);

  const financialBusinesses = businesses.filter(
    (business) => business.category === 'finance'
  );

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="content-div">
          <>
            <h1 className="page-heading">Financial Services</h1>
            {financialBusinesses.length ? (
              <div className="business-cards-div">
                {financialBusinesses.map((business) => {
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
export default FinancialServices;
