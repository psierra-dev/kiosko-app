import NotStores from "@components/General/NotInventory";
import { SubTitle } from "@components/General/Text";
import React from "react";
import styled from "styled-components";
import ListStores from "../components/ListStores";

const StyledFavoriteStores = styled.section`
    padding: 8px 10px;
    min-height: 150px;
    background-color: ${(props) => props.theme.colors["primary-100"]};
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
    }
    @media only screen and (min-width: 1025px) {
          padding: 12px 180px;
    }
        
`;

const FavoriteStores = ({ stores }) => {
  return (
    <StyledFavoriteStores>
      <SubTitle>Kioskos favoritos</SubTitle>

      {stores && stores.length > 0 ? (
        <ListStores stores={stores} />
      ) : (
        <div className="not-stores">
          <NotStores
            icon=""
            title="No tienes kioskos favoritos"
            description=""
          />
        </div>
      )}
    </StyledFavoriteStores>
  );
};

export default FavoriteStores;
