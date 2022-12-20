import { Product } from './product';

export default interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}
