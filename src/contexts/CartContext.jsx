import { createContext } from 'react';
import { useCart } from '@/hooks';

export const cartContext = createContext();

const cartId = 2;

export const CartContext = ({ children }) => {
  const { cartProducts, loading, error, setCartProducts, removeFromCart } =
    useCart(cartId);

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        loading,
        error,
        setCartProducts,
        removeFromCart,
        cartId,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};