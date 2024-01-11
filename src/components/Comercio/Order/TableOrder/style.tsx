import styled from "styled-components";

const StyledTableOrder = styled.table`
    color: ${({ theme: { colors } }) => colors.text};
    & {
        min-height: 100px;
    }
    & thead {
        border-bottom: 1px solid rgba(203, 208, 221, 0.54);
    }
    & tbody tr {
        border-bottom: 1px solid rgba(203, 208, 221, 0.54);
    }

    & thead tr th:nth-child(4) {
        text-align: end;
    }
    & tbody tr td:nth-child(4) {
        text-align: end;
    }
    & thead tr th {
        text-align: start;
        position: sticky;
        min-width: 140px;
        padding: 0.8em;
        white-space: nowrap;
        font-size: 0.75em;
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
        color: ${({ theme: { colors } }) => colors.primary};
        letter-spacing: 0.5px;
        min-width: 230px;
    }
    

`;

export default StyledTableOrder;
