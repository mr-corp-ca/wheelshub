import { createContext, useContext, useState } from "react";

const SellACarContext = createContext();

export const SellACarContextProvider = ({ children }) => {
  const [selectSale, setSelectSale] = useState("");

  return (
    <SellACarContext.Provider value={{ selectSale, setSelectSale }}>
      {children}
    </SellACarContext.Provider>
  );
};

export const useSellACarContext = () => useContext(SellACarContext);
