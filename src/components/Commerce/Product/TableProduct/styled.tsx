import styled from "styled-components";

const StyledTableProduct = styled.table`
    & thead {
        border-bottom: 1px solid rgba(203, 208, 221, 0.54);
    }
    & tbody tr {
        border-bottom: 1px solid rgba(203, 208, 221, 0.54);
    }

    & thead tr th:nth-child(6) {
        text-align: end;
    }
    & tbody tr td:nth-child(6) {
        text-align: end;
    }
    & thead tr th {
        text-align: start;
        position: sticky;
        min-width: 130px;
        padding: 0.8em;
        white-space: nowrap;
        font-size: 0.85em;
        font-weight: 800;
    }
    & tbody tr td {
        text-align: start;
        position: sticky;
        min-width: 130px;
        padding: 0.8em;
        white-space: nowrap;
        font-size: 0.9em;
        font-weight: 500;
    }

    .name-product {
        font-size: 13px;
        color: orange;
        letter-spacing: 0.5px;
        min-width: 230px;
    }
    

`;

export default StyledTableProduct;
