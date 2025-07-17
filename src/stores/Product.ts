export class Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;

  constructor(item: any) {
    this.id = item.id;
    this.title = item.title;
    this.image = item.image;
    this.price = item.price;
    this.rating = item.rating.rate;
    this.category = item.category;
    this.description = item.description;
  }
}
