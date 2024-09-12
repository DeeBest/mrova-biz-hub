import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const backendUrl = 'https://mrovabizbackend.onrender.com';

  const fetchBusinesses = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${backendUrl}/api/businesses`);
      const data = await response.json();

      setBusinesses(data.businesses);
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
    backendUrl,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
