import { MemoryRouter } from 'react-router';
// import StoreContextProvider from '../stores/StoreContextProvider';
import CategoryList from '../components/CategoryList';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock ProductsStore
const mockStore = {
  categories: ['electronics', 'clothing', 'books'],
  getProductsOfCategory: vi.fn(),
};

describe('<CategoryList />', () => {
  it('renders all category buttons', () => {
    render(
      <MemoryRouter>
        <CategoryList productStore={mockStore as any} />
      </MemoryRouter>
    );

    // "all" button + each category
    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
    expect(screen.getByText('clothing')).toBeInTheDocument();
    expect(screen.getByText('books')).toBeInTheDocument();

    // Check if the buttons are rendered correctly
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4); // "all" + 3 categories

    // expect(buttons[0]).toHaveTextContent('all');
    // expect(buttons[1]).toHaveTextContent('electronics');
    // expect(buttons[2]).toHaveTextContent('clothing');
    // expect(buttons[3]).toHaveTextContent('books');

    // check if buttons work right
    const allButton = screen.getByText('all');
    const elecButton = screen.getByText('electronics');
    fireEvent.click(allButton);
    fireEvent.click(elecButton);
    // expect(mockStore.getProductsOfCategory).toHaveBeenCalledWith('all');
    // expect(mockStore.getProductsOfCategory).toHaveBeenCalledWith('electronics');
  });
});
