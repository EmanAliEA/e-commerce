import React, { useEffect } from 'react';
import { useProductStore } from '../stores/StoreContextProvider';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import img from '../assets/forest2.jpg';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';
import { Element } from 'react-scroll';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  filter: grayscale(50%);
  height: 85vh;
  width: 100vw;
  font-weight: normal;
  color: white;
  font-size: 1.8rem;
  & h1,
  & p {
    line-height: 1.5;
    width: 70%;
    margin: 0 auto;
  }
`;

const Home: React.FC = () => {
  const { productsStore } = useProductStore();
  console.log(toJS(productsStore.store));

  useEffect(() => {
    productsStore.getProducts();
  }, []);
  return (
    <Element name="home">
      <Content>
        <h1>Welcome to Our Store</h1>
        <p>
          Welcome to our store! Discover a wide range of high-quality products
          at competitive prices, all in one place. Enjoy a seamless shopping
          experience with fast delivery and exclusive deals.
        </p>
      </Content>
      <ProductsList />
    </Element>
  );
};

export default observer(Home);
