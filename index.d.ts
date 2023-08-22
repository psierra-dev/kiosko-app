//User
type TInfoUser = {
    address: string;
    num_phone: string;


}

type TUser = {
    id?: string;
    name: string;
    lastname: string;
    email: string;
    password?: string;
    role?: string;
    infouser?: InfoUser 
}

//Commerce
type TCommerce = {
    id:number;
    name: string;
    imgurl?: string;
    location?: string;
    number_phone?: string;
    lat?: number;
    lon?: number;
}

type TProduct = {
    id: number;
    name: string;
    imgurl: string;
    categoria?: string | null;
    almacen?: string;
    precio?: string ;
    stock?: boolean;
    unit?: "kg" | "lt";
}

type  TProductInfo = {
    id?: number;
    product: TProduct
    almacen?:TCommerce,
    quantity?: number
}

type TInfoCLient = {
    id: number;
    direction: string;
    lat: number;
    lon: number;
    number_phone: string;
}

type TDetailOrder = {
    id: number;
    precio: number;
    quantity: number;
    product: TProduct;
}

type TOrder = {
    id: number;
    amount: number;
    state: string;
    date: string;
    user: TUser;
    detailorders: TDetailOrder[];
    infoclient: TInfoCLient;
    store?: TCommerce;
    type_payment?: string;
}

//Form
type TFormValues = {
    Direccion?: string,
    Telefono?: string,
    Descripcion?: string,
    Nombre?: string,
    Apellido?: string,
    Indicacion?: string,
    Email?: string,
    Contraseña?: string,
    Nombre_Del_Kiosko?: string,
    }


type TFormValuesUpdateStore = {
    Direccion?: string,
    Telefono?: string,
    Nombre?: string,
    }

//State
type TState = {
    //userLogin
    currentUser: TUser | null,
    //Product
    products: TProduct[] | [],
    productInfo: TProductInfo[] | [],
    allproducts: TProductInfo[] | null,
    //Cart
    allproductsCart: TProductInfo[] | null,
    productsCart: TProductInfo[],
    productCartStore: TProductInfo[],
    storeCart: TCommerce[],
    commerce: TCommerce[],
    widthPhone: boolean,
    //comercio
    mycommerce: TCommerce | null,
    products_commerce: TProductInfo[],
    store_select: number,
    hasStore: boolean,
    LatLng: {lng: number | null, lat: number | null},
    //Order
    orders: TOrder[]
    allorders: TOrder[]
    //socket
    socket: React.MutableRefObject<any> | null
    //Drawer
    stateDrawer: {noti: boolean, order: boolean}
}

type TStatus = 'typing' | 'loading' | "success" | "error"