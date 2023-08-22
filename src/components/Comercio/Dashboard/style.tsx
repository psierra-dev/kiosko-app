import { Color } from "@styles/color";
import styled from "styled-components";

export const SDashboard = styled.section`
  font-size: 1em;
  height: 100%;

  .con {
    width: 100%;
    height: 100%;
    gap: 15px;
  }

  .hero h2 {
    font-size: 1.6em;
    font-weight: 600;
  }
  .hero p {
    font-size: 0.8em;
    font-weight: 500;
  }

  .hero {
    width: 100%;
    background-color: ${Color.Pricipal};
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 0.8em;
    border-radius: 20px;
  }

  .hero-con1 {
    flex: 1;
    gap: 0.2em;
  }
  .hero-con2 {
    flex: 1;
  }

  .svg-dash img {
    width: 100%;
    height: auto;
  }
  .con111 {
    font-size: 34px;
    font-weight: 400;
  }

  .wrapper {
    width: 100%;
    background-color: white;
    padding: 2em;
  }

  .con2 {
    padding-bottom: 15px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .con3 {
    width: 100%;
    //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 5px;
    min-height: 300px;
  }

  .subtitulos-dh {
    margin: 0;
    color: ${Color.Text};
  }

  .con22 {
    margin-top: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  .card-acti {
    width: 40%;
    height: 100px;
    background-color: #701f1f;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 450px) {
    & {
      font-size: 21px;
    }
  }
  @media screen and (min-width: 767px) {
    & {
      font-size: 26px;
    }
  }
`;
