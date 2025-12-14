import { Product, Category } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Elegancka Marynarka",
    price: 299.99,
    category: Category.MEN,
    image: "https://picsum.photos/400/500?random=1",
    description: "Klasyczna granatowa marynarka, idealna na formalne okazje."
  },
  {
    id: 2,
    name: "Letnia Sukienka Floral",
    price: 149.00,
    category: Category.WOMEN,
    image: "https://picsum.photos/400/500?random=2",
    description: "Lekka i przewiewna sukienka w kwiatowe wzory."
  },
  {
    id: 3,
    name: "Bawełniany T-shirt Basic",
    price: 49.90,
    category: Category.MEN,
    image: "https://picsum.photos/400/500?random=3",
    description: "Wysokiej jakości bawełna, krój regular fit."
  },
  {
    id: 4,
    name: "Jeansy Skinny Fit",
    price: 199.99,
    category: Category.WOMEN,
    image: "https://picsum.photos/400/500?random=4",
    description: "Wygodne jeansy z dodatkiem elastanu."
  },
  {
    id: 5,
    name: "Kurtka Skórzana",
    price: 450.00,
    category: Category.MEN,
    image: "https://picsum.photos/400/500?random=5",
    description: "Stylowa kurtka ze skóry ekologicznej."
  },
  {
    id: 6,
    name: "Sweter Wełniany",
    price: 220.00,
    category: Category.WOMEN,
    image: "https://picsum.photos/400/500?random=6",
    description: "Ciepły sweter z domieszką wełny owczej."
  },
  {
    id: 7,
    name: "Buty Sportowe Urban",
    price: 320.00,
    category: Category.MEN,
    image: "https://picsum.photos/400/500?random=7",
    description: "Nowoczesny design i wygoda na co dzień."
  },
  {
    id: 8,
    name: "Torebka Skórzana",
    price: 280.00,
    category: Category.WOMEN,
    image: "https://picsum.photos/400/500?random=8",
    description: "Elegancka torebka na ramię."
  }
];