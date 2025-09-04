import React, { useEffect } from 'react';
import { useProductStore } from '../stores/StoreContextProvider';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
// import img from '../assets/OIP.jpeg';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';

const HomeImg = styled.img`
  width: 95vw;
  height: 80vh;
`;

const Home: React.FC = () => {
  const { productsStore } = useProductStore();
  console.log(toJS(productsStore.store));

  useEffect(() => {
    productsStore.getProducts();
  }, []);
  return (
    <div>
      {/* <HomeImg src={img} alt="homeImage" /> */}
      <ProductsList />
      {/* <ProductItem product={productsStore.store[0]} /> */}
    </div>
  );
};

export default observer(Home);
