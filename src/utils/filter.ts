interface Prop  {
    orders: TOrder[],
    filter: {
        state: string,
        pay: string
    }
}

export function filterOrders({orders, filter}:Prop) {
    let newOrders = []
    const type_pay = filter.pay === 'Ambos' ? true : false 
    newOrders = orders.filter(e => e.state.toLowerCase() === filter.state.toLowerCase() && (!type_pay ?  e.type_payment.toLowerCase() === filter.pay.toLowerCase() : true))
    console.log(newOrders)
    return newOrders
}