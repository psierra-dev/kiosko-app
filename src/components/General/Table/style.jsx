import styled from "styled-components";

export const TableStyle = styled.div.attrs((props) => ({
  ndecolumna: props.ndecolumna,
}))`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.ndecolumna}, 1fr)`};
  width: 100%;
  .column {
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .column:first-child {
    justify-content: start;
    align-items: start;
  }
  .column:last-child {
    text-align: end;
  }
`;
