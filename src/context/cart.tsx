import { useSesionStorage } from "@hooks/useSesionStorage";
import { createContext, useEffect, useReducer } from "react";
interface ISTATE {
  cartProducts: TProduct[];
}

type CartProductContextProp = {
  state: ISTATE;
  setProducts: (products: TProduct[]) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: TProduct) => void;
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
  const { deleteProductCart, addProductCart } = useSesionStorage("cart");

  const setProducts = (products: TProduct[]) => {
    dispatch({ type: "SET_CART_PRODUCTS", payload: products });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };
  const addProduct = (product: TProduct) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };
  const updatedPrice = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_PRICE_PRODUCT", payload: { id, quantity } });
  };

  const deleteForSession = () => {
    window.sessionStorage.removeItem("cart");
  };
  const getForSession = () => {
    const items = window.sessionStorage.get("cart");
  };

  useEffect(() => {}, []);

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

const deleteForSession = () => {
  window.sessionStorage.removeItem("cart");
};
//Reducer
type ProductAction =
  | { type: "SET_CART_PRODUCTS"; payload: TProduct[] }
  | { type: "DELETE_PRODUCT"; payload: number }
  | { type: "ADD_PRODUCT"; payload: TProduct }
  | { type: "UPDATE_PRICE_PRODUCT"; payload: { id: number; quantity: number } };

function ProductReducer(state: ISTATE, action: ProductAction) {
  switch (action.type) {
    case "SET_CART_PRODUCTS":
      return {
        cartProducts: action.payload,
      };
    case "DELETE_PRODUCT":
      const id = action.payload;
      const newData = state.cartProducts.filter((p) => p.id !== id);

      deleteForSession();
      window.sessionStorage.setItem("cart", JSON.stringify(newData));
      return {
        cartProducts: newData,
      };
    case "ADD_PRODUCT":
      let newCart = [];
      if (state.cartProducts?.length === 0) {
        newCart = [action.payload];
      } else {
        newCart = [...state.cartProducts, action.payload];
      }

      deleteForSession();
      window.sessionStorage.setItem("cart", JSON.stringify(newCart));

      return {
        cartProducts: newCart,
      };
    case "UPDATE_PRICE_PRODUCT":
      const newArray = state.cartProducts.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            quantity_aux: action.payload.quantity,
          };
        }
        return p;
      });
      return {
        cartProducts: newArray as TProduct[],
      };
    default:
      return state;
  }
}
