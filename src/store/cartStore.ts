import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartItem = {
  handle: string;
  img: string;
  price: string;
  title: string;
};

type CartState = {
  cartItems: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addCartItem: (cartItem: CartItem) =>
        set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
