import { Product } from '../stores/Product';

export const fetchProductsData = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  const data: Product[] = await response.json();

  return data.map((item: any) => new Product(item));
};
