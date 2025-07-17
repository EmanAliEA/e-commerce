import React from 'react';
import styled from 'styled-components';
import type { CartItem as CartItemType } from '../stores/Cart';
import { useProductStore } from '../stores/StoreContextProvider';
import { observer } from 'mobx-react-lite';

interface Props {
  product: CartItemType;
}

const CartLi = styled.li`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #8080806d;
  & img {
    width: 20%;
    height: 13rem;
  }
  & p {
    width: 50%;
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    p {
      font-size: 1.5rem;
    }
    img {
      height: 8rem;
    }
  }
`;

const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & button {
    border: none;
    outline: none;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const CartItem: React.FC<Props> = ({ product }) => {
  const { productsStore } = useProductStore();
  const handleDecQuantity = () => {
    productsStore.changeQuantity(product.id, -1);
  };
  const handleIncQuantity = () => {
    productsStore.changeQuantity(product.id, 1);
  };
  return (
    <CartLi>
      <img src={product?.image} alt={product?.title} />
      <p>{product?.title}</p>
      <Quantity>
        <div>
          <button onClick={handleDecQuantity}>-</button>
          <span>{product?.quantity}</span>
          <button onClick={handleIncQuantity}>+</button>
        </div>
        <b>
          {product?.quantity} x ${product?.price}
        </b>
      </Quantity>
    </CartLi>
  );
};

export default observer(CartItem);
