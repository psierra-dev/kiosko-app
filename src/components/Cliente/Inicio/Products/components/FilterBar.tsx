import Chip from "@components/General/Chip/Chip";
import { StyledItemForm } from "@components/General/ItemsForm/ItemsForm";
import { WrapperFlex } from "@components/General/Wrapper/Wrapper";

import { category as categoryData } from "data/category";
import React, { useState } from "react";
import styled from "styled-components";

const FilterBarStyle = styled.section`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
    flex-wrap: wrap;

    .chip-container::-webkit-scrollbar {
    display: none;
}
`;

type Props = {
  onFilterSearch: (data: string) => void;
  onFilterCategory: (data: string) => void;
  search: string;
  category: string;
};

const FilterBar = ({
  onFilterSearch,
  onFilterCategory,
  search,
  category,
}: Props) => {
  return (
    <FilterBarStyle>
      <StyledItemForm
        as="input"
        type="text"
        placeholder="Buscar producto"
        $height="30px"
        $width="200px"
        onChange={(e) => onFilterSearch(e.target.value)}
        value={search}
      />

      <WrapperFlex
        $overflow="auto"
        $flexdirection="row"
        $gap="0.5rem"
        $width="fit-content"
        className="chip-container"
      >
        {categoryData?.map((slide, index) => (
          <div key={slide.name}>
            <Chip
              $bg={category === slide.name ? "#253D4E" : "#fff"}
              $bordercolor="#253d4e33"
              $color={category === slide.name ? "white" : ""}
              key={slide.name}
              onClick={() => onFilterCategory(slide.name)}
            >
              <span>{slide.name}</span>
            </Chip>
          </div>
        ))}
      </WrapperFlex>
    </FilterBarStyle>
  );
};

export default FilterBar;
