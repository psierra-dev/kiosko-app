import { useSesionStorage } from "@hooks/useSesionStorage";
import { stat } from "fs";
import { createContext, useEffect, useReducer } from "react";
interface ISTATE {
  cartProducts: TProductInfo[];
}

type CartProductContextProp = {
  state: ISTATE;
  setProducts: (products: TProductInfo[]) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: TProductInfo) => void;
  updatedPrice: (id: number, quantity: number) => void;
};
export const CartProductContext = createContext<CartProductContextProp>(
  {} as CartProductContextProp
);

const INITIAL_STATE: ISTATE = {
  cartProducts: [],
};

export function ProductCartProvider({ children }) {
  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);
  const { deleteProductCart, addProductCart } =
    useSesionStorage("productscart");

  const setProducts = (products: TProductInfo[]) => {
    dispatch({ type: "SET_CART_PRODUCTS", payload: products });
  };

  const deleteProduct = (id: number) => {
    deleteProductCart(id);
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };
  const addProduct = (product: TProductInfo) => {
    const newProduct = { ...product, quantity: 1 };
    addProductCart(newProduct);
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };
  const updatedPrice = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_PRICE_PRODUCT", payload: { id, quantity } });
  };

  return (
    <CartProductContext.Provider
      value={{
        state,
        setProducts,
        deleteProduct,
        addProduct,
        updatedPrice,
      }}
    >
      {children}
    </CartProductContext.Provider>
  );
}
//Reducer
type ProductAction =
  | { type: "SET_CART_PRODUCTS"; payload: TProductInfo[] }
  | { type: "DELETE_PRODUCT"; payload: number }
  | { type: "ADD_PRODUCT"; payload: TProductInfo }
  | { type: "UPDATE_PRICE_PRODUCT"; payload: { id: number; quantity: number } };

function ProductReducer(state: ISTATE, action: ProductAction) {
  switch (action.type) {
    case "SET_CART_PRODUCTS":
      return {
        cartProducts: action.payload,
      };
    case "DELETE_PRODUCT":
      const id = action.payload;
      return {
        cartProducts: state.cartProducts.filter((p) => p.id !== id),
      };
    case "ADD_PRODUCT":
      let newCart = [];
      if (state.cartProducts?.length === 0) {
        newCart = [action.payload];
      } else {
        newCart = [...state.cartProducts, action.payload];
      }
      return {
        cartProducts: newCart,
      };
    case "UPDATE_PRICE_PRODUCT":
      const newArray = state.cartProducts.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            quantity: action.payload.quantity,
          };
        }
        return p;
      });
      return {
        cartProducts: newArray as TProductInfo[],
      };
    default:
      return state;
  }
}
