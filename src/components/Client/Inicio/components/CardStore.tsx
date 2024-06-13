import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@components/General/FeedBack/FavoriteButton";
import { MdOutlineHideImage } from "react-icons/md";

const StyledCardStore = styled.div`
    margin-right: 10px;
    min-width: 220px;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    background-color: ${({ theme: { colors } }) => colors.main};
    color: ${({ theme: { colors } }) => colors.text};

    .conimg {
        width: 100%;
        height: 90px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
    }

    .conimg img {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
        object-fit: cover;
    }

    .conimg .not-store  svg{
        font-size: 6rem;
    }

    .info {
        margin-top: 0.3rem;
        padding: 0.5rem;
    }

    .info .info-title {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 0.1rem;

    }
    .info .info-title h5 {
        margin-bottom: 3px;
        font-size: 0.875rem;
        font-weight: bold;

        &:hover {
          color: ${(props) => props.theme.primary};
          scale: calc(1.1);
          transition: all 2ms;
        }
    }
    

    .info .txt-state {
        font-size: 12px;
        color: ${({ theme: { colors } }) => colors.primary};
    }
    .info div {
        flex-direction: row;
    }

    @media only screen and (min-width: 481px) {
        .conimg {
            height: 100px;
        }

    }
    @media only screen and (min-width: 769px) {
        width: 80%;
        .conimg {
            height: 120px;
        }
    }
    @media only screen and (min-width: 1025px) {
        width: 70%;
        .conimg {
            height: 130px;
        }
    }
`;

type Props = {
  id: number;
  direction: string;
  name: string;
  open: boolean;
  img_url?: string;
  isFavorite: boolean;
};

const CardStore = ({
  id,
  name,
  open,
  img_url,
  isFavorite,
  direction,
}: Props) => {
  return (
    <StyledCardStore>
      <Link href={`/kiosko?id=${id}&direction=${direction}&name=${name}`}>
        <div className="conimg">
          {img_url ? (
            <Image src={img_url} width={200} height={150} alt="imgurl" />
          ) : (
            <span className="not-store">
              <MdOutlineHideImage />
            </span>
          )}
        </div>
      </Link>
      <div className="info">
        <div className="info-title">
          <Link href={`/kiosko?id=${id}&direction=${direction}&name=${name}`}>
            <h5>{name}</h5>
          </Link>
          {/*<FavoriteButton isFavorite={isFavorite} onToggle={() => null} />*/}
        </div>

        <p className="txt-state">{open ? "Abierto" : "Cerrado"}</p>
      </div>
    </StyledCardStore>
  );
};

export default CardStore;
