import './financialServices.css';
import { useContext } from 'react';
import { Context } from '../../context/context';
import BusinessCard from '../../components/businessCard/BusinessCard';

const FinancialServices = () => {
  const { businesses, isLoading } = useContext(Context);

  const financialBusinesses = businesses.filter(
    (business) =>
      business.category === 'financial' || business.category === 'finance'
  );

  return (
    <main>
      <div className="content-div">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className="page-heading">Financial Services</h1>
            <div className="business-cards-div">
              {financialBusinesses.map((business) => {
                return <BusinessCard business={business} key={business._id} />;
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default FinancialServices;
