import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import type { Product } from '../stores/Product';
import { Buttons, HR } from '../ui/styles';
import { NavLink } from 'react-router';

interface Props {
  product: Product;
  addToCart: (arg: Product) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.2rem solid #a9a8a872;
  border-radius: 0.3rem;
  width: 30%;
  gap: 1rem;
  padding: 2rem 0;
  & img {
    width: 70%;
    height: 20rem;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  width: 40%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const DescText = styled.p`
  font-size: 1.7rem;
  padding: 0rem 2rem;
  padding: 0 1rem;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceText = styled.span`
  font-size: 2rem;
`;

const ProductItem: React.FC<Props> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <Container>
      <img src={product?.image} alt="productImage" />
      <Title>{product?.title}</Title>
      <DescText>{product?.description}</DescText>
      <HR $color="#a9a8a872" />
      <PriceText>${product?.price}</PriceText>
      <HR $color="#a9a8a872" />
      <Buttons>
        <NavLink to={`product/${product?.id}`}>buy now</NavLink>
        <button onClick={handleAddToCart}>add to cart</button>
      </Buttons>
    </Container>
  );
};

export default observer(ProductItem);
