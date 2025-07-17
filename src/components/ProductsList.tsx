import React from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import { observer } from 'mobx-react-lite';
import { useProductStore } from '../stores/StoreContextProvider';
import ProductItem from './ProductItem';
import Title from '../ui/Title';
import Loader from '../ui/Loader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  font-size: 5rem;
  text-transform: capitalize;
  padding: 2rem 1rem;
  gap: 5rem;
  /* background-color: gray;   */
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

const ProductsList: React.FC = () => {
  const { productsStore } = useProductStore();
  if (!productsStore.store) return <Loader />;
  return (
    <Container>
      <Title title="latest products" heading={true} />
      <CategoryList productStore={productsStore} />
      <List>
        {productsStore.store.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            addToCart={productsStore.addToCart}
          />
        ))}
      </List>
    </Container>
  );
};

export default observer(ProductsList);
