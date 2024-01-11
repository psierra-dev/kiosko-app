import styled from "styled-components";

export const TableStyle = styled.table`
 & tbody tr {
  padding: 0.1rem;
  border-bottom: 1px solid rgba(203, 208, 221, 0.54);
  
}
 & tbody tr td{
  padding: 0.8rem;
  text-align: end;
  font-size: 0.8rem;
}




   & tbody tr td:nth-child(1) {
    text-align: start ;
  }
   
  .num-order {
    color: rgb(56, 116, 255);
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
   & thead tr th:nth-child(1) {
    text-align: start;
  }

  & thead tr tr:last-child() {
    text-align: end;
  }


  
`;
