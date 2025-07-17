import { makeAutoObservable } from 'mobx';
import type { Product } from './Product';

export class CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number = 1;

  constructor(item: Product) {
    this.id = item.id;
    this.title = item.title;
    this.image = item.image;
    this.price = item.price;
    makeAutoObservable(this);
  }
}
