import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

const StyledFavoriteButton = styled.button<{ $isFavorite: boolean }>`
  border: none;
  width: fit-content;
  height: fit-content;
  color: ${(props) => (props.$isFavorite ? "red" : props.theme.colors.text)};
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    scale: calc(1.1);
  }
`;

const FavoriteButton = ({
  isFavorite,
  onToggle,
}: {
  isFavorite: boolean;
  onToggle: () => void;
}) => {
  return (
    <>
      <StyledFavoriteButton $isFavorite={isFavorite} onClick={onToggle}>
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </StyledFavoriteButton>
    </>
  );
};

export default FavoriteButton;
