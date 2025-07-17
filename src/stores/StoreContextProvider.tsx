import React, { createContext, useContext, type ReactNode } from 'react';
import { ProductsStore } from './ProductsStore';

interface StoreProps {
  productsStore: ProductsStore;
}
const StoreContext = createContext<StoreProps>({} as StoreProps);
const productsStore = new ProductsStore();

interface Props {
  children: ReactNode;
}

const StoreContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <StoreContext.Provider value={{ productsStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useProductStore = () => {
  return useContext(StoreContext);
};

export default StoreContextProvider;
