import React, {useReducer} from 'react';

import {TodoContext} from './context';
import {todoReducer} from './todoReducer';




const INITIAL_STATE: TState = {
    currentUser: null,
    products:[],
    productInfo: [],
    allproducts: [],
    allproductsCart: [],
    productsCart:[],
    productCartStore: [],
    storeCart: [],
    commerce: [],
    widthPhone: false,
    mycommerce: null,
    products_commerce: [],
    store_select: 0,
    hasStore: false,
    LatLng: {lng: null, lat: null},
    orders: [],
    allorders:[],
    socket: null,
    stateDrawer: {noti: false, order: false}
}

interface props{ 
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children} : props) => {

    const [todoState,dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const setCurrentUser = async (u: TUser) => {
        dispatch({type: "setCurrentUser", payload:u})
    }

    const lnglatUser = (obj: {lng: number, lat: number}) => {
        dispatch({type: "setLngLat", payload:obj})
    }

    const getProductos = async (p: TProductInfo[]) => {
        dispatch({type: "getProductos", payload:p})
    }

    const getProductToAdd = async (p: TProduct[]) => {
        dispatch({type: "getProductToAdd", payload:p})
    }

    const updateTipo = (tipo: string) => {
        dispatch({type: "filterTipo", payload: tipo})
    }

    const updateProducto = (id:number, precio: string | undefined, stock: string | null | undefined) => {
        dispatch({type: "updateProducto", payload: {id, precio, stock}})
    }

    const deleteProduct = (id: number) => {
        dispatch({type: "deleteProduct", payload: id})
    }

    const searchProduct = (name: string, type: string) => {
        dispatch({type: 'searchProduct', payload: {name, type}})
    }

    
    const changeWidth = (b: boolean) => {
        dispatch({type: "changePhone", payload: b})
    }
    
    const loginAuth = (type: string | null, token: string | null) => {
        dispatch({type: "token", payload: token})
        dispatch({type: "type", payload: type})
    }
    
    const addProductToCart = (p: TProductInfo[]) => {
        dispatch({type:'addProductsCart', payload: p})
    }
    
    const addProductToCartCopy = (p: TProductInfo[]) => {
        dispatch({type:'addProductsCartCopy', payload: p})
    }

    const addProductCart = (p: TProductInfo) => {
        dispatch({type:'addProductCart', payload: p})
    }

    const updateProductCart = (obj: {id: number,newprecio: number}) => {
        dispatch({type:'updateProductCart', payload: obj})
    }
    
    const deleteProductCart = (id: number) => {
        dispatch({type:'deleteProductCart', payload: id})
    }
    
    //Commerce
    const getComercios = (c: TCommerce[]) => {
        dispatch({type: "getComercios", payload: c})
    }

    const selectStore = (id: number) => {
        dispatch({type:'selectStore', payload: id});
    }

    const getStoreCart = (c: TCommerce[]) => {
        dispatch({type:'getStoreCart', payload: c})
    }

    const selectStoreCart = (id: number) => {
        dispatch({type: 'selectStoreCart', payload:id})
    }

    const setCommerce = (c: TCommerce) => {
        dispatch({type:'setCommerce', payload: c})
    }

    const setHasStore = (b: boolean) => {
        dispatch({type:'setHasStore', payload: b})
    }

    //Order
    const setOrder = (orders: TOrder[]) => {
        dispatch({type:'setOrders', payload: orders})
    }

    const filterOrders = (f: string) => {
        dispatch({type:'filterOrders', payload:f})
    }

    //Socket
    const setSocket = (socket: any) => {
        dispatch({type:'setSocket', payload:socket})
    }
    
    //Notification
    const filterNotication = (obj: {state?: string, fecha?: string, pay?: string}) => {
        dispatch({type:'filterNotification', payload:obj})
    }

    //Drawer 
    const setStateDrawer = (obj: {noti: boolean, order: boolean}) => {
        dispatch({type:'setStateDrawer', payload:obj})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            setCurrentUser,
            getProductos,
            getProductToAdd,
            updateTipo,
            searchProduct,
            getComercios,
            changeWidth,
            loginAuth,
            updateProducto,
            deleteProduct,
            getStoreCart,
            selectStoreCart,
            addProductToCart,
            addProductToCartCopy,
            addProductCart,
            updateProductCart,
            deleteProductCart,
            selectStore,
            setCommerce,
            setHasStore,
            setOrder,
            filterOrders,
            setSocket,
            filterNotication,
            setStateDrawer,
            lnglatUser,
        }}>
            {children}
        </TodoContext.Provider>
    
)}