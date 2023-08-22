import React, { useContext, useEffect, useState } from "react";

import { SAddProduct } from "./style.ap";

import CardProduct from "./components/CardProduct";

import axios from "axios";
import { TodoContext } from "@context/context";
import { Text, Wrapper } from "@styles/style";
import { useFetch } from "@hooks/useFetch";
import { api } from "@utils/axios";
import useCurrentSWR from "@hooks/useCurrentSWR";
import { AiOutlineClose } from "react-icons/ai";
/*interface Prop{
    activeC: React.Dispatch<React.SetStateAction<boolean>>
}*/

const TypeArr = ["All", "Verduras", "Frutas", "Bebidas", "Golosinas", "Otros"];

interface Prop {
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddProduct = ({ setActiveModal }: Prop) => {
  const [filter, setFilter] = useState("All");
  const [arrayProductSelect, setArrayProductSelect] = useState<number[]>([]);
  const { data: products, isLoading } = useCurrentSWR(
    "/product-store/producttoadd"
  );
  console.log(products);

  const handlerSelect = (id: number) => {
    let isProduct = arrayProductSelect.some((item) => item === id);

    isProduct
      ? setArrayProductSelect(arrayProductSelect.filter((item) => item !== id))
      : setArrayProductSelect([...arrayProductSelect, id]);
  };

  const addProduct = async () => {
    try {
      const res = await api.post("/product-store/addproductstore/", {
        productos: arrayProductSelect,
      });
      console.log(res.data);
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  /* const handlerTipo = (name: string) => {
    updateTipo(name);
    setActive(name);
  };*/
  const productFilter =
    products &&
    products?.filter((p) => {
      if (filter === "All") return products;
      return p.product.categoria.toLowerCase() === filter.toLowerCase();
    });
  console.log(arrayProductSelect);
  const closeComponet = () => setActiveModal(false);

  return (
    <SAddProduct>
      <div className="-con">
        <div className="con-edit">
          <div className="con-edit1">
            <div className="con-edit11">
              <button onClick={closeComponet}>
                <AiOutlineClose />
              </button>
            </div>

            <div className="con-edit12">
              <div>Todos los productos</div>

              <div className="filt">
                {TypeArr.map((e) => (
                  <Text
                    key={e}
                    onClick={() => setFilter(e)}
                    color={filter === e ? "orange" : null}
                    size="14px"
                    weight="400"
                    lineheight="20px"
                    cursor="pointer"
                  >
                    {e}
                  </Text>
                ))}
              </div>
            </div>

            <Wrapper>
              {productFilter &&
                productFilter?.map((producto: TProductInfo) => (
                  <CardProduct
                    producto={producto}
                    funcSelect={handlerSelect}
                    key={producto.id}
                    isSelect={arrayProductSelect.some(
                      (e) => e === producto.product.id
                    )}
                  />
                ))}
            </Wrapper>
          </div>

          {arrayProductSelect.length > 0 ? (
            <button className="btn-add" onClick={addProduct}>
              Agregar {arrayProductSelect.length}
            </button>
          ) : null}
        </div>
      </div>
    </SAddProduct>
  );
};

export default AddProduct;
/*const AddProduct = ({activeC}: Prop) => {
    const [c , setc] = useState(false)
    const [input, setInput] = useState<Producto>({
        id:'',
        name:'',
        img:'',
        categoria: '',
        almacen: '',
        precio: '',
        descripcion: '',
    })

    function hadlerInput(e: React.ChangeEvent<HTMLInputElement>){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("submit")
        
        
    }

    return (
            <AddProductStyle>
                <div className='-con'>
                    

                    <div className='con-edit'>
                        <div className='con-form'>
                            <div className='con-form1'>
                                <div>
                                    Añadir producto
                                </div>
                                <button onClick={() => activeC(false)}>X</button>
                            </div>

                            <div className='con-form2'>
                                <div className='con-form22'>
                                    <div >    
                                        <input
                                        className='con-form21'
                                        type="text" 
                                        name="name" 
                                        value={input.name} 
                                        onChange={hadlerInput} 
                                        placeholder="Name"/>
                                    </div>
                                    
                                    
                                    <div>   
                                        <input
                                        className='con-form21'
                                        type="number" 
                                        name="precio" 
                                        value={input.precio} 
                                        onChange={hadlerInput}  
                                        placeholder="Precio"/>
                                    </div>
                                    
                                    <div>    
                                        <select className='con-form21' name="" id="">
                                            <option value="">Verduras</option>
                                            <option value="">Verduras</option>
                                            <option value="">Verduras</option>
                                        </select>
                                    </div>

                                    <div>
                                        <input
                                        className='con-form21'
                                        type="text" 
                                        placeholder='Descripcion'/>
                                    </div>
                                    <div className='con-form-btn'>
                                        <button  onClick={submit} >Crear</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddProductStyle>
    )
}*/
