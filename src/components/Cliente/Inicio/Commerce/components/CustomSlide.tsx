import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";
import CardKiosko from "./CardKiosko";
import Link from "next/link";

const CustomSlideStyle = styled.section`
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

    .header-arrow h3 {
      font-size: 1rem;
      color: ${({ theme: { colors } }) => colors.text};
      font-weight: bold;
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


    .card {
        min-width: 350px;
        height: 200px;
        background-color: aqua;
    }

    @media only screen and (min-width: 480px) {
   
    }
    @media only screen and (min-width: 768px) {
    
      .header-arrow h3 {
      font-size: 1.2rem;
      color: ${({ theme: { colors } }) => colors.text};
      font-weight: bold;
    }
    }
    @media only screen and (min-width: 1024px) {
    
    }
`;

const CustomSlide = ({ stores }) => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    console.log("scroll", scrollContainer.current.scrollLeft);
    scrollContainer.current.scrollLeft += 350;
  };
  return (
    <CustomSlideStyle>
      <header className="header-arrow">
        <h3>Kioskos Cerca Tuyo</h3>

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
        {stores.map((p) => (
          <Link
            key={p.id}
            href={`/kiosko?id=${p.id}&direction=${p.direction}&name=${p.name}`}
          >
            <CardKiosko store={p} />
          </Link>
        ))}
      </div>
    </CustomSlideStyle>
  );
};

export default CustomSlide;
