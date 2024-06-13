import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

const StyledSlide = styled.section`
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 8px;
    width: 100%;
    margin-top: 1rem;
    
   

    .header-arrow {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .header-arrow div{
        flex-direction: row;
        gap: 5px;
    }
    .header-arrow div button{
        display: flex;
       cursor: pointer;
       border: none;
       padding: 0.2rem;
       border-radius: 50%;
       font-size: 1.5rem;
       align-items: center;
       justify-content: center;
    }

    .header-arrow div button:hover {
        background-color: gray;
    }
        .scroll-horizontal {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 4px 4px 10px;
        
        scroll-behavior: smooth;
        gap: 2px;
    }

    .scroll-horizontal::-webkit-scrollbar {
        display: none;
       }
`;
const Slide = ({ children }) => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    console.log("scroll", scrollContainer.current.scrollLeft);
    scrollContainer.current.scrollLeft += 350;
  };
  return (
    <StyledSlide>
      <header className="header-arrow">
        <div></div>
        <div>
          <button onClick={scrollLeft}>
            <BiChevronLeft />
          </button>
          <button onClick={scrollRight}>
            <BiChevronRight />
          </button>
        </div>
      </header>
      <div ref={scrollContainer} className="scroll-horizontal">
        {children}
      </div>
    </StyledSlide>
  );
};

export default Slide;
