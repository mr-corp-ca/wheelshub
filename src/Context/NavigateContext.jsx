import { createContext, useContext, useState } from "react";

const NavigateContext = createContext();

export const NavigateContextProvider = ({ children }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  return (
    <NavigateContext.Provider value={{ isRedirect, setIsRedirect }}>
      {children}
    </NavigateContext.Provider>
  );
};

export const useNavigateContext =()=> useContext(NavigateContext)