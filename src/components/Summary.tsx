import React from 'react';
import styled from 'styled-components';
import Title from '../ui/Title';

const Container = styled.div`
  border: 1px solid #8080806d;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 30%;
  padding-bottom: 1.5rem;
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
    flex-direction: column;
    font-size: 2rem;
    gap: 1rem;
    padding: 1.5rem;
    li {
      display: flex;
      justify-content: space-between;
    }
    li:last-child {
      margin: 1rem 0;
    }
  }

  button {
    margin: auto;
    width: 90%;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    /* border: none; */
    outline: none;
    background-color: black;
    color: white;
    text-transform: capitalize;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.5s;
  }
  & button:hover {
    background-color: transparent;
    color: black;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;
interface Props {
  orderSummary: {
    length: number;
    total: number;
  };
}

const Summary: React.FC<Props> = ({ orderSummary }) => {
  return (
    <Container>
      <Title title="order summary" />
      <ul>
        <li>
          <span>products({orderSummary.length})</span>
          <span>${orderSummary.total}</span>
        </li>
        <li>
          <span>shipping</span>
          <span>$30</span>
        </li>
        <li>
          <b>Total amount</b>
          <b>${(orderSummary.total + 30).toFixed(2)}</b>
        </li>
      </ul>
      <button>go to checkout</button>
    </Container>
  );
};

export default Summary;
