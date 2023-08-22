import { Color } from "@styles/color";
import styled from "styled-components";

export const EditProductStyle = styled.section`
  flex: 2;
  height: 100vh;
  padding: 0.2em;
  color: ${Color.Text};
  width: 100%;
  & .header {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.6em;
  }
  & .header h4 {
    font-size: 1em;
  }
  & .header button {
    padding: 0.7em;
    color: white;
    font-size: 0.6em;
    border: none;
    background-color: ${Color.One};
    border-radius: 5px;
    cursor: pointer;
  }
  .con {
    width: 100%;
  }

  .container-product {
    width: 100%;
    padding: 1em;
    background-color: white;
    border-radius: 0.5em;
  }

  .table {
    gap: 20px;
  }

  .body-table {
    gap: 1rem;
  }

  .header-filter {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0.7em;
    margin-bottom: 0.8em;

    border-bottom: 0.5px solid ${Color.Text};
  }

  .header-filter h6 {
    font-size: 0.8em;
  }
  .filt {
    flex-direction: row;
    justify-content: space-between;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 1em;
  }

  .column p {
    font-size: 0.7em;
  }

  @media only screen and (min-width: 770px) {
    padding: 1em;
  }
`;
