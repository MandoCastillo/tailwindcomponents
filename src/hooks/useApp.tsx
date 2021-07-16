import { useState } from 'react';

export const useApp = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addItem = (item: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCart([...cart, { nombre: item }]);
      setIsLoading(false);
    }, 250);
  };

  const removeItem = () => {
    const cartFilter: any[] = [...cart]; ;
    cartFilter.pop();
    setCart(cartFilter);
  };

  return { cart, isLoading, addItem, removeItem };
};
