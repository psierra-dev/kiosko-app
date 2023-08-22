import { Color } from "@styles/color";
import styled from "styled-components";

export const SCardOrder = styled.div`
  color: black;
  .head-card-noti {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${Color.Pricipal};
    width: 100%;
    align-items: center;
  }

  .time-noti {
    flex-direction: row;
  }

  .MuiAccordionSummary-content {
    width: 100%;
  }
  .head-cont-noti {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
