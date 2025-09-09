import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { observer } from 'mobx-react-lite';
import Title from '../ui/Title';
import type { CartItem as CartItemType } from '../stores/Cart';

interface Props {
  cart: CartItemType[];
}

const Container = styled.div`
  border: 1px solid #8080806d;
  border-radius: 0.5rem;
  width: 60%;
  /* margin: 6rem 0rem; */
  & > p {
    padding: 1rem 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    background-color: #96959517;
    text-transform: capitalize;
  }
  & hr {
    border: none;
    border-top: 1px solid #8080806d;
    margin: 0;
  }
  & ul {
    top: 0;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 2rem;
    overscroll-behavior-y: contain;
    overflow-y: scroll;
    max-height: 30rem;

    & > p {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      color: #666464b6;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    ul {
      padding: 1rem;
    }
  }
`;

const CartList: React.FC<Props> = ({ cart }) => {
  return (
    <Container>
      <Title title="item list" />
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
        {cart.length === 0 && <p>Your cart is empty</p>}
      </ul>
    </Container>
  );
};

export default observer(CartList);
