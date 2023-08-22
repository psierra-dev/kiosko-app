import { Color } from "@styles/color";
import styled from "styled-components";

export const SCardProduct = styled.div.attrs((props: { active: boolean }) => ({
  active: props.active,
}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${Color.Pricipal};

  padding: 0.1em;
  color: ${Color.Text};

  .column-product div {
    flex-direction: row;
    text-align: center;
    align-items: center;
    gap: 0.8em;
  }

  .column-product img {
    width: 1.7em;
    height: 1.7em;
  }

  .column p {
    font-size: 0.7em;
  }

  .stock {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
  }

  .nostock {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
  }
  .img-cp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .img-cp img {
    width: 100%;
    height: 100%;
  }

  .name-card {
    display: contents;
  }

  .categoria {
    display: contents;
  }

  .inp-precio {
    width: 60%;
    text-align: center;
    border-radius: 5px;
    padding: 0.2em;
    font-size: small;
  }
  .precio {
    width: 50px;
  }

  .all-btn {
    flex-direction: row;
    gap: 8px;
  }

  .all-btn button {
    cursor: pointer;
    border: none;
    font-size: 0.8em;
    color: inherit;
  }
  .all-btn button.active {
    color: ${Color.One};
  }
  .all-btn button:hover {
    scale: calc(1.2);
    color: ${Color.One};
  }
  .all-btn button:disabled {
    scale: initial;
    color: #555555;
  }

  .state-product fieldset {
    border-radius: 5px;
  }

  @media only screen and (min-width: 770px) {
    .state-product fieldset {
      padding: 0;
    }
    .column p {
      font-size: 0.8em;
    }
  }
`;
