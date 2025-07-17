import React from 'react';
import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { FaCartShopping } from 'react-icons/fa6';
import { BiLogIn } from 'react-icons/bi';
import { useProductStore } from '../stores/StoreContextProvider';
import { observer } from 'mobx-react-lite';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #b2b0b081;
  align-items: center;
  font-size: 2rem;
  padding: 1.5rem;

  @media (max-width: 320px) {
    font-size: 1.5rem;
    gap: 0.5rem;
  }
`;

const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  /* & a.active {
    color: black;
  } */
  & a {
    color: #5f5e5e;
    text-transform: capitalize;
  }

  & a:hover {
    color: black;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  & a {
    font-size: 1.7rem;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 0.1rem solid black;
    border-radius: 0.5rem;
    padding: 1rem;
    text-transform: capitalize;
    transition: all 0.5s;
  }
  & a:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 320px) {
    a {
      padding: 0.5rem;
      font-size: 1rem;
    }
  }
`;

const NavBar: React.FC = () => {
  const { productsStore } = useProductStore();
  return (
    <NavContainer>
      <Logo>E-commerce</Logo>
      <NavList>
        <NavLink to="/">home</NavLink>
        <NavLink to="">products</NavLink>
        <NavLink to="">about</NavLink>
        <NavLink to="">contact</NavLink>
      </NavList>

      <Buttons>
        <NavLink to="">
          <BiLogIn />
          <span>login</span>
        </NavLink>
        <NavLink to="">
          <FaUserPlus />
          <span>register</span>
        </NavLink>
        <NavLink to="/cart">
          <FaCartShopping />
          <span>cart ({productsStore?.cart?.length || 0})</span>
        </NavLink>
      </Buttons>
    </NavContainer>
  );
};

export default observer(NavBar);
