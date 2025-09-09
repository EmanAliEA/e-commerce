import React from 'react';
import Title from '../ui/Title';
import styled from 'styled-components';
import CartList from '../components/CartList';
import Summary from '../components/Summary';
import { useProductStore } from '../stores/StoreContextProvider';
import { observer } from 'mobx-react-lite';

interface Props {}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 3rem 1rem;
  gap: 6rem;

  @media (max-width: 768px) {
    width: 95%;
    & > div:nth-child(2) {
      gap: 1.5rem;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const Cart: React.FC<Props> = () => {
  const { productsStore } = useProductStore();
  return (
    <CartContainer>
      <Title title="cart" heading={true} />
      <div>
        <CartList cart={productsStore.cart} />
        <Summary orderSummary={productsStore.getOrderSummary} />
      </div>
    </CartContainer>
  );
};

export default observer(Cart);
