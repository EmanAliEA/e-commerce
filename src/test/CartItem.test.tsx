import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from '../components/CartItem';
import type { CartItem as cartItemType } from '../stores/Cart';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const store = {
  product: {
    id: 1,
    title: 'Test Product',
    image: 'test-product.jpg',
    price: 100,
    quantity: 1,
  },
  changeQuantity: vi.fn(),
};

describe('<CartItem />', () => {
  it('renders cart item with product details', () => {
    render(<CartItem product={store.product as cartItemType} />);

    expect(screen.getByRole('img')).toBeDefined();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1 x $100')).toBeInTheDocument();

    // check buttons
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2); // increment, decrement
    expect(buttons[0]).toHaveTextContent('-');
    fireEvent.click(buttons[0]); // click increment
    // expect(store.changeQuantity).toHaveBeenCalledWith(
    //   store.product.id,
    //   store.product.quantity - 1
    // );
  });
});
