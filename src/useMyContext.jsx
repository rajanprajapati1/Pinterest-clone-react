import React, { useState, useContext, createContext } from 'react';
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState('Default State');

  return (
    <MyContext.Provider value={{myState,setMyState}}>
      {children}
    </MyContext.Provider>
  );
};
const useMyContext = () => {
  return useContext(MyContext);
};

export {useMyContext ,MyProvider};
