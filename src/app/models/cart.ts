import CartItem from "./cartItem";

export default interface Cart {
  
  sessionId?: string;
  userId?: string;
  items: CartItem[];
    
  }
  

  