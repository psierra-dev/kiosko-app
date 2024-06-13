import React from "react";
import { FaStoreSlash } from "react-icons/fa";
import styled from "styled-components";
const StyledNotInventory = styled.div`
            gap: 5px;
            align-items: center;
            color: gray;
            & h4 {
                font-size: 15px;
            }
            & p {
                font-size: 13px;
            }
            & span {
                font-size: 23px;
            }
`;

const NotInventory = ({ title, description, icon }) => {
  return (
    <StyledNotInventory>
      <span>{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledNotInventory>
  );
};

export default NotInventory;
