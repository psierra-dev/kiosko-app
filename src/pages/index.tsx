import React from "react";
import styled from "styled-components";

import Footer from "@components/Landing/Footer/Footer";
import Header from "@components/Landing/Header";
import Hero from "@components/Landing/Hero";
import Products from "@components/Landing/Products";
import StoreInfo from "@components/Landing/StoreInfo";
import Feature from "@components/Landing/Feature";

const StyledPageLanding = styled.div`
    width: 100%;
    height: 100%;

    & main {
      display: flex;
      flex-direction: column;
      gap: 2.8rem;
    }

    @media only screen and (min-width: 481px) {
        
    }
    @media only screen and (min-width: 769px) {
      & main {
      gap: 3.5rem;
    }
      
    }
    @media only screen and (min-width: 1025px) {
      & main {
      gap: 5rem;
    }
    }

`;

const Inicio = () => {
  return (
    <StyledPageLanding>
      <Header />
      <main>
        <Hero />
        <Products />
        <StoreInfo />
        <Feature />
      </main>
      <Footer />
    </StyledPageLanding>
  );
};

export default Inicio;
