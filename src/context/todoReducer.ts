

type TodoAction = 
    |{type: 'getProductos', payload: TProductInfo[]}
    |{type: 'getProductToAdd', payload: TProduct[]}
    |{type: 'setCurrentUser', payload: TUser}
    |{type: 'filterTipo', payload: string}
    |{type: 'searchProduct', payload: {name:string, type:string}}
    |{type: 'getComercios', payload: TCommerce[]}
    |{type: 'changePhone', payload: boolean}
    |{type: 'token', payload: string | null}
    |{type: 'type', payload: string | null}
    |{type: 'getProductsComercio', payload: TProductInfo[]}
    |{type: 'addProductsCart', payload: TProductInfo[]}
    |{type: 'addProductsCartCopy', payload: TProductInfo[]}
    |{type: 'addProductCart', payload: TProductInfo}
    |{type: 'updateProductCart', payload: {id:number, newprecio: number}}
    |{type: 'deleteProductCart', payload: number}
    |{type: 'getStoreCart', payload: TCommerce[]}
    |{type: 'selectStoreCart', payload: number}     
    |{type: 'addProductCart', payload: TProductInfo}
    |{type: 'updateProducto', payload: {id: number, precio: string | undefined, stock: string | null | undefined}}
    |{type: 'deleteProduct', payload: number}
    |{type: 'selectStore', payload: number}
    |{type: 'setCommerce', payload: TCommerce}
    |{type: 'setHasStore', payload: boolean}
    |{type: 'setOrders', payload:TOrder[]}
    |{type: 'filterOrders', payload:string}
    |{type: 'setSocket', payload:any}
    |{type: 'filterNotification', payload:{state?: string, fecha?: string, pay?: string}}
    |{type: 'setStateDrawer', payload:{noti: boolean, order: boolean}}
    |{type: 'setLngLat', payload:{lng: number, lat: number}}


export const todoReducer = (state: TState, action: TodoAction): TState => {

    switch (action.type){

        case "setLngLat":
            return {
                ...state,
                LatLng: action.payload
            }
        case "setStateDrawer":
            console.log(action.payload)
            return {
                ...state,
                stateDrawer: action.payload
            }
        case"filterNotification":
        //completar
        const allOrderss = state.allorders;
        const filterOrder = action.payload;

        console.log(allOrderss)

        const ordersFilter = allOrderss.filter(e => e.state === filterOrder.state)

        return {
            ...state,
            orders: ordersFilter
        }
        case "setSocket":
            return {
                ...state,
                socket: action.payload
            }
        case "setCurrentUser":
            return {
                ...state,
                currentUser: action.payload
            }
        case "getProductos":
            return {
                ...state,
                allproducts: action.payload,
                productInfo: action.payload
            }
        case "getProductToAdd":
            return {
                ...state,
                products: action.payload
            }
        case "filterTipo":
            const allproducts = state.allproducts;
            const tipo = action.payload;
            const filterTipo = tipo === "All"  ? allproducts : allproducts?.filter(e => e.product.categoria === tipo);
            return{
                ...state,
                productInfo: filterTipo as TProductInfo[] 
                }
        case "searchProduct":
            let productsToSearch: TProductInfo[]=[];
            const {type,name} = action.payload;
            if(type === 'edit'){
                productsToSearch = state.allproducts as TProductInfo[];
            }
            //const productI = state.productInfo;
            console.log(productsToSearch)
            //filtrar productos que comience con lo que manda
            let filterName =  productsToSearch?.filter(e => e.product.name.toUpperCase().startsWith(name.toUpperCase()))
            return {
                ...state,
                productInfo: filterName as TProductInfo[]
            }
        case "setCommerce":
            return {
                ...state,
                mycommerce: action.payload
            }

        case "setHasStore":
            return {
                ...state,
                hasStore: action.payload
            }
        case "getComercios":
            return {
                ...state,
                commerce: action.payload
            }
        case "changePhone":
            return {
                ...state,
                widthPhone: action.payload
            }
        case "getProductsComercio":
            return {
                ...state,
                products_commerce: action.payload
            }
        case "updateProducto":
            const products = state.productInfo;
            const product = products?.filter(e => e.id === action.payload.id);
            if(product !== undefined && product?.length > 0){
                product[0].product.precio = action.payload.precio;
                product[0].product.stock = action.payload.stock;
            }
            
            return {
                ...state,
                productInfo: product as TProductInfo[]
            }
        case "deleteProduct":
            return {
                ...state,
                productInfo: state.productInfo?.filter(e => e.id !== action.payload) as TProductInfo[]
            }
        case "getStoreCart":
            return {
                ...state,
                storeCart: action.payload
            }
        case "addProductsCart":
            
            return {
                ...state,
                allproductsCart: action.payload                                             
            }
        case "addProductsCartCopy":
                const arra = [] as TProductInfo[];

                action.payload.forEach(e =>arra.push(
                    {id:e.id, 
                    product:{
                        id:e.product.id,
                        name:e.product.name,
                        categoria: e.product.categoria,
                        precio: e.product.precio,
                        imgurl: e.product.imgurl,
                        unit: e.product.unit,
                    }, 
                    almacen:{
                        id:e.almacen?.id as number,
                        name: e.almacen?.name as string
                    }}));
            return {
                ...state,
                productsCart: arra                                             
                }
        case "selectStoreCart":
            const pro = state.productsCart;
            console.log('procart: ',pro)
            console.log("Treducer", action.payload)
            const filterProduct = pro.filter(e => e.almacen?.id === action.payload);
            return {
                ...state,
                productCartStore: filterProduct
            }
        case "addProductCart":
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload]
            }
        case "updateProductCart":
            const productsCart = state.productsCart;
            const newprecio = action.payload.newprecio.toString();
            const productCart = productsCart.filter(e => e.id === action.payload.id);
            productCart[0].product.precio = newprecio;
            //const productos = Searchproducto? Searchproducto?.product?.precio = toString(action.payload?.newprecio) : producto;

            return {
                ...state,
                productsCart: productsCart

            }
            case "deleteProductCart":
                const productsCartTwo = state.productCartStore;
                const notDeleteproductCart = productsCartTwo.filter(e => e.id !== action.payload);
    
                return {
                    ...state,
                    productCartStore: notDeleteproductCart
    
                }
        case "selectStore":

            return {
                ...state,
                store_select: action.payload
            }
        case "setOrders":
            

            return {
                ...state,
                allorders: action.payload,
                orders: action.payload.filter(e => e.state === 'Aprobada'),
                
            }
        case "filterOrders":
            const allorderss = state.allorders;
            const filter = action.payload
            console.log(filter)
            const filterOrders = filter === "All"  ? allorderss : allorderss?.filter(e => e.state === filter);
            console.log(filterOrders)
            return {
                ...state,
                orders: filterOrders
            }
        default:
            return state
    }
}