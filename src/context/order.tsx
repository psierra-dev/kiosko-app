import { createContext, useReducer } from "react";
const SET_ORDERS = "SET_ORDERS";
const DELETE_ORDER = "DELETE_ORDER";
const UPDATE_ORDER = "UPDATE_ORDER";
const FILTER_ORDERS = "FILTER_ORDERS";

interface ISTATE {
  orders: TOrder[];
}
type OrderContextProp = {
  state: ISTATE;
  setOrders: (orders: TOrder[]) => void;
  updateOrder: (obj: {
    id: number;
    product_updated: { precio: string; stock: boolean };
  }) => void;
  deleteOrder: (id: number) => any;
  filterOrders: (orders: TOrder[]) => void;
};

export const OrderContext = createContext<OrderContextProp>(
  {} as OrderContextProp
);

const INITIAL_STATE: ISTATE = {
  orders: [],
};

export function OrderProvider({ children }) {
  const [state, dispatch] = useReducer(ORDERReducer, INITIAL_STATE);

  const setOrders = (orders: TOrder[]) => {
    console.log(orders);
    dispatch({ type: SET_ORDERS, payload: orders });
  };

  const updateOrder = (obj: {
    id: number;
    product_updated: { precio: string; stock: boolean };
  }) => {
    dispatch({ type: UPDATE_ORDER, payload: obj });
  };

  const deleteOrder = (id: number) => {
    dispatch({ type: DELETE_ORDER, payload: id });
  };

  const filterOrders = (orders: TOrder[]) => {
    dispatch({ type: FILTER_ORDERS, payload: orders });
  };
  return (
    <OrderContext.Provider
      value={{
        state,
        setOrders,
        updateOrder,
        deleteOrder,
        filterOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

//Reducer
type ProductAction =
  | { type: "SET_ORDERS"; payload: TOrder[] }
  | {
      type: "UPDATE_ORDER";
      payload: {
        id: number;
        product_updated: { precio: string; stock: boolean };
      };
    }
  | { type: "DELETE_ORDER"; payload: number }
  | { type: "FILTER_ORDERS"; payload: TOrder[] };

function ORDERReducer(state: ISTATE, action: ProductAction) {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        orders: action.payload,
      };
    case "DELETE_ORDER":
      const id = action.payload;
      return {
        orders: state.orders.filter((p) => +p.id !== id),
      };
    case "FILTER_ORDERS":
      return {
        orders: action.payload,
      };
    case "UPDATE_ORDER":
      const id_product = action.payload.id;
      const { precio, stock } = action.payload.product_updated;
      return {
        orders: [],
      };

    default:
      return state;
  }
}
