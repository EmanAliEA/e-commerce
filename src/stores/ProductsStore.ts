import { action, makeAutoObservable, set } from 'mobx';
import type { Product } from './Product';
import { fetchProductsData } from '../services/productsAPI';
import { CartItem } from './Cart';

export class ProductsStore {
  store: Product[] = [];
  products: Product[] = [];
  cart: CartItem[] = [];
  categories: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  async getProducts() {
    const products = await fetchProductsData();
    if (products) {
      this.products = products;
      this.store = products;
      const categoriesList: string[] = [];
      this.store.forEach((item) => categoriesList.push(item.category));
      this.categories = [...new Set<string>(categoriesList)];
    }
  }

  getProduct(id: number) {
    return this.store.find((item) => item.id === id);
  }

  getProductsOfCategory(category: string) {
    if (category !== 'all')
      this.store = this.products.filter((item) => item.category === category);
    else this.store = this.products;
  }

  addToCart = (item: Product) => {
    const foundItem = this.cart.find((product) => product.id === item.id);
    if (!foundItem) this.cart.push(new CartItem(item));
  };

  get getOrderSummary() {
    const productsLength = this.cart.reduce(
      (acc, item) => (acc += item.quantity),
      0
    );

    const total = this.cart.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );

    return {
      total: total,
      length: productsLength,
    };
  }

  // increaseQuantity = (id: number) => {
  //   this.cart = this.cart.map((item) =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  // };

  // decreaseQuantity = (id: number) => {
  //   this.cart = this.cart.map((item) =>
  //     item.id === id ? { ...item, quantity: item.quantity-- } : item
  //   );
  // };

  changeQuantity = (id: number, quantity: number) => {
    let foundItem = this.cart.find((item) => item.id === id);
    if (foundItem?.quantity === 0 && quantity < 0)
      this.cart = this.cart.filter((item) => item.id !== id);
    this.cart = this.cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + quantity } : item
    );
  };
}
