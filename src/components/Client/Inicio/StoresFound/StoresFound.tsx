import React from "react";
import styled from "styled-components";
import ListStores from "../components/ListStores";
import { SubTitle } from "@components/General/Text";

import NotStores from "@components/General/NotInventory";

const StyledStoresFound = styled.section`
   padding: 8px 10px;

   min-height: 150px;

    .not-stores {
        justify-content: center;
        align-items: center;
        height: 100%;
    }

   @media only screen and (min-width: 481px) {
        padding: 10px 20px;
    }
    @media only screen and (min-width: 769px) {
        padding: 12px 80px;
        min-height: 350px;
    }
    @media only screen and (min-width: 1025px) {
          padding: 12px 180px;
    }
        
`;

const StoresFound = ({ stores }: { stores: TStore[] }) => {
  return (
    <StyledStoresFound>
      <SubTitle>Kioskos cerca tuyo</SubTitle>
      {stores && stores.length > 0 ? (
        <ListStores stores={stores} />
      ) : (
        <div className="not-stores">
          <NotStores
            title="No podemos ofrecerte resultados"
            description="Elija otra direccion"
          />
        </div>
      )}
    </StyledStoresFound>
  );
};

export default StoresFound;
