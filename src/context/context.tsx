import {createContext} from "react";


export type TodoContextProps = {
    todoState: TState;
    
    setCurrentUser: (u: TUser) => void;
    changeWidth: (b: boolean) => void;
    loginAuth: (type:string | null, token:string | null) => void;
    lnglatUser: (obj:{lng: number, lat: number}) => void;
    //Products
    getProductos: (p: TProductInfo[]) => void;
    getProductToAdd: (p: TProduct[]) => void;
    updateProducto: (id: number, precio: string | undefined, stock: string | null | undefined) => void;
    deleteProduct: (id: number) => void;
    updateTipo: (tipo: string) => void;
    searchProduct: (name: string, type: string) => void;
    addProductToCart: (p: TProductInfo[]) => void;
    addProductToCartCopy: (p: TProductInfo[]) => void;
    addProductCart: (p: TProductInfo) => void;
    updateProductCart: (obj: {id: number, newprecio: number}) => void;
    deleteProductCart: (id: number) => void;
    //Commerce
    selectStore: (id: number) => void;
    getStoreCart: (c: TCommerce[]) => void;
    selectStoreCart: (id: number) => void;
    getComercios: (c: TCommerce[]) => void;
    //Notification
    filterNotication: (obj: {state?: string, fecha?: string, pay?: string}) => void;
    setCommerce: (c: TCommerce) => void;
    setHasStore : (b: boolean) => void;
    //Orders
    setOrder: (o: TOrder[]) => void;
    filterOrders: (f: string) => void;
    //setsocket
    setSocket:
    (socket: any) => void;
    //Drawer
    setStateDrawer: ({noti, order}: {noti:boolean, order:boolean}) => void;
}

export const 
TodoContext = createContext<TodoContextProps>({} as TodoContextProps);