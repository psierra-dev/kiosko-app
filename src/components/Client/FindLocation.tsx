import MapBox from "@lib/MapBoxReact/Map";
import React, { useEffect, useState } from "react";
import { BiLoader, BiXCircle } from "react-icons/bi";
import styled from "styled-components";
import { CustomerService } from "@service/customer";
import { useRouter } from "next/router";
import useCustomer from "@hooks/useCustomer";
import { CircularProgress } from "@mui/material";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";
import { Button } from "@components/General/Button/Button";
import { StyledItemForm } from "@components/General/ItemsForm/ItemsForm";
import Loader from "@components/General/Loader/Loader";
const customerService = new CustomerService();

const FindLocationStyle = styled.section`
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 700px;
    background-color: white;
    margin: auto;
    color: ${({ theme: { colors } }) => colors.text};
    position: relative;
    .container-map {
        height: 500px;
    }

    & input {
        padding: 8px;
        font-size: 17px;
    }

    .btn-close {
        position: absolute;
        top: 4px;
        left: 5px;
        z-index: 1;
        border: none;
        background-color: transparent;
        font-size: 1.5rem;
        cursor: pointer;
        color: inherit;

    }

    .loading {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #29292967;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
    }

`;

const FindLocation = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { data, isLoading } = useCustomer();

  const [direction, setDirection] = useState(() =>
    !isLoading && data && data?.direction ? data?.direction : ""
  );
  const [geolocation, setGeolocation] = useState<{
    latitud: number;
    longitud: number;
  }>({
    latitud: data?.latitud,
    longitud: data?.longitud,
  });
  const [geolocationAux, setGeolocationAux] = useState<{
    latitud: number;
    longitud: number;
  }>({
    latitud: data?.latitud,
    longitud: data?.longitud,
  });

  const [status, setStatus] = useState<TStatus>("typing");

  const router = useRouter();

  const isChange =
    JSON.stringify(geolocation) !== JSON.stringify(geolocationAux) ||
    data?.direction !== direction;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await customerService.update({ direction, ...geolocation });
      setStatus("success");
      router.reload();
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  useEffect(() => {
    if (data && data?.direction) {
      setDirection(data?.direction);
      setGeolocation({ latitud: data.latitud, longitud: data.longitud });
      setGeolocationAux({ latitud: data.latitud, longitud: data.longitud });
    }
  }, [data]);

  return (
    <FindLocationStyle>
      <button className="btn-close" onClick={onCloseModal}>
        <BiXCircle />
      </button>

      {true && (
        <div className="loading">
          <Loader>
            <BiLoader />
          </Loader>
        </div>
      )}
      <>
        <div className="container-map">
          <MapBox
            handleLocation={(lnglat) =>
              setGeolocation({
                latitud: lnglat.latitud,
                longitud: lnglat.longitud,
              })
            }
            initialLocation={{
              latitud: data?.latitud,
              longitud: data?.longitud,
            }}
            type="drag"
          />
        </div>

        <WrapperFlex $height="fit-content" $gap="9px" $padding="2rem">
          <WrapperFlex as="form" $gap="0.6rem" onSubmit={handleSubmit}>
            <h3>Cual es tu direccion?</h3>

            <StyledItemForm
              type="text"
              placeholder="Direccion"
              onChange={(e) => {
                e.stopPropagation();
                setDirection(e.target.value);
              }}
              value={direction}
            />
            <StyledItemForm type="text" placeholder="Numero" />
            <Button disabled={!isChange || status === "loading"} type="submit">
              {status === "loading" ? (
                <Loader size="sm">
                  <BiLoader />
                </Loader>
              ) : (
                "Guardar Direccion"
              )}
            </Button>
          </WrapperFlex>
        </WrapperFlex>
      </>
    </FindLocationStyle>
  );
};

export default FindLocation;
