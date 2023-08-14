import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartItem = {
  handle: string;
  price: string;
  title: string;
  inStock: boolean;
  imgSrc: string;
  imgAlt: string;
};

type CartItemDicValue = {
  handle: string;
  imgSrc: string;
  imgAlt: string;
  price: string;
  title: string;
  inStock: boolean;
  qty: number;
};

type CartItemDic = Record<string, CartItemDicValue>;

type CartState = {
  cartItems: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
  getCartItemsDic: () => CartItemDicValue[];
  removeProduct: (handle: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addCartItem: (cartItem: CartItem) =>
        set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
      getCartItemsDic: () => {
        const cartItemsDic: CartItemDic = {};
        for (const cartItem of useCartStore.getState().cartItems) {
          if (cartItemsDic[cartItem.handle]) {
            cartItemsDic[cartItem.handle].qty += 1;
          } else {
            cartItemsDic[cartItem.handle] = {
              imgAlt: cartItem.imgAlt,
              imgSrc: cartItem.imgSrc,
              price: cartItem.price,
              title: cartItem.title,
              inStock: cartItem.inStock,
              qty: 1,
              handle: cartItem.handle,
            };
          }
        }
        return Object.values(cartItemsDic);
      },
      removeProduct: (handle: string) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.handle !== handle),
        }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
