export enum Category {
  MEN = 'MEN',
  WOMEN = 'WOMEN',
  ACCESSORIES = 'ACCESSORIES'
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  email: string;
  name: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
