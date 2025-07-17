import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router';
import StoreContextProvider from '../stores/StoreContextProvider';

test('<NavBar /> renders navigation links and cart count', () => {
  render(
    <MemoryRouter>
      <StoreContextProvider>
        <NavBar />
      </StoreContextProvider>
    </MemoryRouter>
  );

  // Check for navigation links
  expect(screen.getByText('home')).toBeInTheDocument();
  expect(screen.getByText('products')).toBeInTheDocument();
  expect(screen.getByText('about')).toBeInTheDocument();
  expect(screen.getByText('contact')).toBeInTheDocument();

  // Check for cart count
  expect(screen.getByText('cart (0)')).toBeInTheDocument();

  // Check for login and register buttons
  expect(screen.getByText('login')).toBeInTheDocument();
  expect(screen.getByText('register')).toBeInTheDocument();

  // Check for logo
  expect(screen.getByText('E-commerce')).toBeInTheDocument();
});
