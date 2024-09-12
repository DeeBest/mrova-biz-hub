import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBusinesses = async () => {
    setIsLoading(true);

    try {
      const response = await (
        await fetch('http://localhost:5000/api/businesses')
      ).json();

      setBusinesses(response.businesses);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const contextValue = {
    isActive,
    setIsActive,
    businesses,
    isLoading,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
