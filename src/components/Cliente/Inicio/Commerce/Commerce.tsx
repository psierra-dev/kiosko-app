import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";

import CardKiosko from "./components/CardKiosko";
import { SCommerce } from "./style";
import useSessionLocation from "@hooks/useSessionLocation";
import MapBox from "@lib/MapBoxReact/Map";

import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const STORES = [
  {
    id: 1,
    name: "Los Sierras",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Raul",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "La Glady",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "La Glady",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "La Glady",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "La Glady",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "La Glady",
    imgurl: "https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const options: Options = {
  perPage: 4,
  perMove: 1,
  pagination: false,
  arrows: false,
  gap: 1,
};
const Commerce = ({ commerce }) => {
  const router = useRouter();

  const [lng, setLng] = useState<number | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const { setItem, getItem } = useSessionLocation();
  const { lng: lngQuery, lat: latQuery, storeid } = router.query;

  const locationSession = getItem();
  const select = (id: number) => {
    console.log(id);
    //if (id === Number(storeid)) return;
    const path = router.asPath;
    const replacePath = path.replace(`storeid=${storeid}`, `storeid=${id}`);
    router.push(replacePath);
  };

  const handleLocation = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setLat(latitude);
    setLng(longitude);
  };
  useEffect(() => {
    if (STORES.length > 0 && lngQuery && latQuery && !storeid) {
      console.log(STORES[0].id);
      const path = `${router.asPath}&storeid=${STORES[0].id}`;
      router.push(path);
    }
  }, [STORES]);
  useEffect(() => {
    if (lng !== null && lat !== null) {
      setItem({ lat: lat, lng: lng });
      router.push(`inicio?lng=${lng}&lat=${lat}`);
    }
  }, [lng, lat]);

  return (
    <SCommerce>
      {lng === null && (
        <Alert className="aviso-mp" severity="info">
          Marca la ubicacion donde te encuentras
        </Alert>
      )}
      <div className="container-map">
        <MapBox
          initialLocation={{
            latitude: 65.99999,
            longitude: -29.0091289982,
            type: "store",
          }}
          handleLocation={handleLocation}
          type="drag"
        />
      </div>

      <div className="con-commerce">
        <div className="wrapper">
          <div className="splide">
            <Splide options={options}>
              {STORES.map((slide) => (
                <SplideSlide key={slide.id}>
                  <div>
                    <CardKiosko commerce={slide} handleSelect={select} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </SCommerce>
  );
};

export default Commerce;
