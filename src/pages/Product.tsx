import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink, useParams } from 'react-router';
import { useProductStore } from '../stores/StoreContextProvider';
import styled from 'styled-components';
import { IoMdStar } from 'react-icons/io';
import { Buttons } from '../ui/styles';

const Container = styled.div`
  margin: auto;
  padding: 5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 2.5rem;
`;
const ProductImage = styled.img`
  width: 40%;
  height: 50rem;
`;

const TextDiv = styled.div`
  padding: 5rem;
  display: flex;
  width: 47%;
  font-size: 2rem;
  gap: 1.5rem;
  flex-direction: column;
  color: #626161;
  & p {
    font-size: 5rem;
    color: black;
  }
  & > span:first-child {
    text-transform: uppercase;
    font-weight: bold;
  }
  .price {
    font-size: 4rem;
  }
  .rate {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
  }
`;

const Product: React.FC = () => {
  const { id } = useParams();
  const { productsStore } = useProductStore();
  const product = productsStore.getProduct(Number(id));
  console.log(product);
  return (
    <Container>
      <ProductImage src={product?.image} alt={product?.title} />
      <TextDiv>
        <span>{product?.category}</span>
        <p>{product?.title}</p>
        <span className="rate">
          {product?.rating}
          <IoMdStar color="black" />
        </span>
        <span className="price">${product?.price}</span>
        <span>{product?.description}</span>
        <Buttons>
          <button>add to cart</button>
          <NavLink to="/cart">go to cart</NavLink>
        </Buttons>
      </TextDiv>
    </Container>
  );
};

export default observer(Product);
