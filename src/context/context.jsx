import { useState, createContext } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const [isActive, setIsActive] = useState(false);

  const contextValue = {
    isActive,
    setIsActive,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
