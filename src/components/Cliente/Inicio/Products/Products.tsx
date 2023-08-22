import { useContext, useEffect, useState } from "react";

import { SProducts } from "./style";

import axios from "axios";
import { TodoContext } from "@context/context";
import { API_BASE_URL } from "@config/config";
import { ChipFilter, Text, Wrapper } from "@styles/style";
import { CardProduct } from "./components/CardProduct";
import useFilter from "@hooks/useFilter";
import { category } from "../../../../data/category";
import Image from "next/image";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const arrTipo = ["All", "Verduras", "Frutas", "Bebidas", "Golosinas", "Otros"];

const PRODUCTS: TProductInfo[] = [
  {
    id: 1,
    product: {
      id: 1,
      name: "Tomate",
      categoria: "Vegetables",
      precio: "200",
      imgurl:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 2,
    product: {
      id: 1,
      name: "Tomate",
      categoria: "Vegetables",
      precio: "200",
      imgurl:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 3,
    product: {
      id: 1,
      name: "Tomate",
      categoria: "Vegetables",
      precio: "200",
      imgurl:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 4,
    product: {
      id: 1,
      name: "Tomate",
      categoria: "Vegetables",
      precio: "200",
      imgurl:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  {
    id: 5,
    product: {
      id: 1,
      name: "Tomate",
      categoria: "Vegetables",
      precio: "200",
      imgurl:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  ",
    },
  },
];

const options: Options = {
  perPage: 2,
  perMove: 1,
  gap: 20,
  pagination: false,
  arrows: false
};
const Products = ({ products }) => {
  const { filterProducts, filter, setFilter } = useFilter("All");

  const productsFilter = filterProducts({ products });

  return (
    <SProducts>
      <Text size="20px" weight="520" lineheight="20px" color="#253D4E">
        Categorias
      </Text>
      <Splide options={options}>
              {category.map((slide, index) => (
                <SplideSlide key={index}>
                  <div>
                  <ChipFilter
                    border={filter === slide.name && "orange"}
                    key={slide.name}
                    onClick={() => setFilter(slide.name)}
                   >
                   {slide.img && (
                   <Image className="img-filter" src={slide?.img} alt={slide.name} />
                    )}
                   <span>{slide.name}</span>
                  </ChipFilter>
                  </div>
                </SplideSlide>
              ))}
        </Splide>
      <div>
        <Text size="20px" weight="520" lineheight="20px" color="#253D4E">
          Productos
        </Text>
      </div>

      <div className="cont-product">
        {PRODUCTS.length > 0 ? (
          <Wrapper>
            {PRODUCTS?.map((p: TProductInfo) => (
              <CardProduct key={p.id} product={p} />
            ))}
          </Wrapper>
        ) : (
          <div className="not-product">
            <Text size="20px" weight="520" lineheight="20px" color="#253D4E">
              No hay productos
            </Text>
          </div>
        )}
      </div>
    </SProducts>
  );
};

export default Products;
