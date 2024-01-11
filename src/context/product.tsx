import { createContext, useReducer } from "react";
interface ISTATE {
  products: TProductStore[];
}

type ProductContextProp = {
  state: ISTATE;
  setProducts: (pruducts: TProductStore[]) => void;
  updateProduct: (obj: {
    id: number;
    product_updated: { precio: string; stock: boolean };
  }) => void;
  deleteProduct: (id: number) => any;
  filterProducts: (products: TProductStore[]) => void;
};
export const ProductContext = createContext<ProductContextProp>(
  {} as ProductContextProp
);

const INITIAL_STATE: ISTATE = {
  products: [],
};

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  const setProducts = (products: TProductStore[]) => {
    console.log(products);
    dispatch({ type: "SET_PRODUCT", payload: products });
  };

  const updateProduct = (obj: {
    id: number;
    product_updated: { precio: string; stock: boolean };
  }) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: obj });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  const filterProducts = (products: TProductStore[]) => {
    dispatch({ type: "FILTER_PRODUCT", payload: products });
  };
  return (
    <ProductContext.Provider
      value={{
        state,
        setProducts,
        updateProduct,
        deleteProduct,
        filterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

//Reducer
type ProductAction =
  | { type: "SET_PRODUCT"; payload: TProductStore[] }
  | {
      type: "UPDATE_PRODUCT";
      payload: {
        id: number;
        product_updated: { precio: string; stock: boolean };
      };
    }
  | { type: "DELETE_PRODUCT"; payload: number }
  | { type: "FILTER_PRODUCT"; payload: TProductStore[] };

function ProductReducer(state: ISTATE, action: ProductAction) {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        products: action.payload,
      };
    case "DELETE_PRODUCT":
      const id = action.payload;
      return {
        products: state.products.filter((p) => p.id !== id),
      };
    case "FILTER_PRODUCT":
      return {
        products: action.payload,
      };
    case "UPDATE_PRODUCT":
      const id_product = action.payload.id;
      const { precio, stock } = action.payload.product_updated;
      const product_updated = state.products.map((p) => {
        if (p.id === id_product) {
          return {
            ...p,
            product: {
              ...p.info_product,
              precio: precio,
              stock: stock,
            },
          };
        }
        return p;
      });
      console.log(product_updated);
      return {
        products: product_updated,
      };

    default:
      return state;
  }
}
