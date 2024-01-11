import styled from "styled-components";

const StyledWrapperModal = styled.div`
    margin: auto;
    color: ${({ theme: { colors } }) => colors.text};

    .container {
        padding: 1rem;
        width: 100vw;
        max-width: 500px;
        background-color: #fff;
        border-radius: 10px;
    }

    .btn-close {
        position: absolute;
        top: 16px;
        right: 16px;
        border: none;
        font-size: 1rem;
        z-index: 100;
        cursor: pointer;
    }

    .container header {
        font-size: .9rem;
        margin-bottom: 0.8rem;
    }
`;

export default StyledWrapperModal;
