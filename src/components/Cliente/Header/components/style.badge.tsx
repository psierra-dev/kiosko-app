import { Color } from "@styles/color";
import styled from "styled-components";

export const SBadge= styled.div`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    color: ${Color.Text};


    .cart {
        cursor: pointer;
    }
    .carritonoti{
        position: absolute;
        top: -5px;
        right: -3px;
        height: .8rem;
        width: .8rem;
        border-radius: 50%;
        background-color: ${Color.One};
        align-items: center;
        justify-content: center;
        color: ${Color.Pricipal};
    }

    .lenght {
        font-size: 12px;
    }

    .concarritoprecio {
        margin-left: 4px;
    }
    .carritoprecio{
        height: 16px
    }

    .name {
        color: ${Color.Text};

    }

    .precio {
        color: ${Color.One};
    }

    .mas {
        cursor: pointer;
    }

`