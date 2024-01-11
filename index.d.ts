//User
type TUser = {
    id?: string;
    name: string;
    lastname: string;
    email: string;
    password?: string;
    imgurl?: string;
    role?: string;
    verifyEmail?: boolean; 
}

//Store
type TStore = {
    id?:number;
    name?: string;
    nameStore?: string;
    imgurl?: string;
    direction: string;
    phone: string;
    latitud: number;
    longitud: number;
    payment_type?: string;
    active_type?: string;
    open?: boolean;
}



//Product
type TProduct = {
    id?: number;
    name: string;
    imgurl: string;
    category_name?: string;
    unit_measurement?: "kg" | "unit" | string;
    quantity?: number;
    quantity_aux?: number;
    price?: number;
    state?: boolean;
}

type  TProductStore = {
    id?: number;
    quantity?: number;
    quantity_aux?: number;
    price: number;
    state: boolean;
    info_product?: TProduct;
}

type TInfoSend = {
    id: number;
    direction: string;
    latitud: number;
    longitud: number;
    phone: string;
    }

type TOrderProduct = {
    id: number;
    price: number;
    quantity: number;
    product: TProduct;
}

type TOrder = {
    id: string;
    amount: number;
    state: "success" | "cancelled" | "pendding";
    date: string;
    paymentType?: "cash" | "mp";
    paid?: boolean;
    delivery: boolean;
    customer: TUser;
    orderproduct: TProduct[];
    store?: TStore;
    infosend: TInfoSend
}

//Form
type TFormValues = {
    direction?: string,
    phone?: string,
    description?: string,
    name_user?: string,
    lastname_user?: string,
    Indicacion?: string,
    email?: string,
    password?: string,
    name_kiosko?: string,
    file?: FileList | string,
    }

type TCreateProduct = {
    category_name: string,
    name_product: string,
    unit_measurement: string,
    file: FileList
    }

type TFormUpdateProduct = {
    Stock: string,
    Precio: string
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