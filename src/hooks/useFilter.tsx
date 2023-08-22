import React, { useState } from "react";
interface Prop {
  orders: TOrder[];
}

const useFilter = (initialFilter) => {
  const [filter, setFilter] = useState(initialFilter);

  function filterOrders(orders: TOrder[]) {
    console.log(orders);
    let newOrders = [];
    const type_pay = filter.pay === "Ambos" ? true : false;
    newOrders = orders.filter(
      (e) =>
        e.state.toLowerCase() === filter.state.toLowerCase() &&
        (!type_pay
          ? e.type_payment.toLowerCase() === filter.pay.toLowerCase()
          : true)
    );
    console.log(newOrders);
    return newOrders;
  }

  function filterProducts({ products }: { products: TProductInfo[] }) {
    if (filter === "All") return products;
    return products.filter(
      (p) => p.product.categoria.toLowerCase() === filter.toLowerCase()
    );
  }
  return { filterOrders, setFilter, filter, filterProducts };
};

export default useFilter;
