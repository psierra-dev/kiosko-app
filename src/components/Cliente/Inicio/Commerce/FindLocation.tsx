import MapBox from "@lib/MapBoxReact/Map";
import { Button, Div, StyledForm, StyledInput, Text } from "@styles/style";
import React, { useEffect, useState } from "react";
import { BiX, BiXCircle } from "react-icons/bi";
import styled from "styled-components";
import { CustomerService } from "@service/customer";
import { useRouter } from "next/router";
import useCustomer from "@hooks/useCustomer";
import { CircularProgress } from "@mui/material";
const customerService = new CustomerService();

const FindLocationStyle = styled.section`
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 700px;
    background-color: white;
    margin: auto;

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
        font-size: 1.3rem;
        cursor: pointer;
    }

`;

const FindLocation = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { data, isLoading } = useCustomer();

  const [direction, setDirection] = useState(() =>
    !isLoading && data.direction ? data?.direction : ""
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

    console.log(direction, geolocation);
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

      {isLoading ? (
        <p>Loading</p>
      ) : (
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

          <Div gap="9px" padding="2rem">
            <StyledForm onSubmit={handleSubmit}>
              <h3>Cual es tu direccion?</h3>

              <StyledInput
                type="text"
                placeholder="Direccion"
                onChange={(e) => {
                  e.stopPropagation();
                  setDirection(e.target.value);
                }}
                value={direction}
              />
              <StyledInput type="text" placeholder="Numero" />
              <Button
                disabled={!isChange || status === "loading"}
                p="10px"
                fontsize="smaller"
                backgroundcolor={!isChange ? "#e7be97" : ""}
                cursor={!isChange ? "no-drop" : ""}
                type="submit"
              >
                {status === "loading" ? (
                  <CircularProgress size={12} />
                ) : (
                  "Guardar Direccion"
                )}
              </Button>
            </StyledForm>
          </Div>
        </>
      )}
    </FindLocationStyle>
  );
};

export default FindLocation;
