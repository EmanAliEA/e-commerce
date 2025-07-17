import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import type { ProductsStore } from '../stores/ProductsStore';

interface Props {
  productStore: ProductsStore;
}

const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 3rem 0; */
`;

const ListItem = styled.button`
  text-transform: capitalize;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 0.7rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const CategoryList: React.FC<Props> = ({ productStore }) => {
  // get list of categories
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    productStore.getProductsOfCategory(event.target.textContent);
  };
  return (
    <List>
      <ListItem onClick={handleOnClick}>all</ListItem>
      {productStore.categories.map((item) => (
        <ListItem key={item} onClick={handleOnClick}>
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default observer(CategoryList);
