export interface Product {
  id: string;
  name: string;
  description: string;
  richDescription: string;
  image: string;
  images: string[];
  brand: string;
  price: number;
  category: number;
  stock: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
}
