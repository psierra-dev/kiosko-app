import styled from "styled-components";

const StyledListProduct = styled.table`
     & tbody tr {
    padding: 0.1rem;
    border-bottom: 1px solid rgba(203, 208, 221, 0.54);
  
    }
    & tbody tr td{
    padding: 0.8rem;
    text-align: end;
    font-size: 0.8rem;
    }

  & thead tr th {
      text-align: end;
      position: sticky;
      min-width: 50px;
      padding: 0.8em;
    }

  & thead {
    border-bottom: 1px solid rgba(203, 208, 221, 0.54);
    font-size: 12px;
    font-weight: 800;
  }

`;
