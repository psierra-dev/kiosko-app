import styled from "styled-components";

export const SFormStore = styled.div`
    width: 100%;
    height: auto;
    background-color: ${({ theme: { colors } }) => colors.main};
    color: ${({ theme: { colors } }) => colors.text};
    padding: 2em;
    gap: 12px;

    .form-store {
        display: flex;
        gap: 2px;
        flex-direction: column;
        width: 100%;
    }

    .con-btn-image {
        width: 300px;
        height: 150px;
    }

    .con-map {
        width: 100%;
        height: 300px;
        margin-bottom: 1em;
    }

    .msg-map {
        font-size: 0.8em;
        color: #ffb700;
    }
    .btn-image {
        width: 100%;
        height: 100%;
    }

    .btn-sb {
        height: 39px;
        background-color: ${({ theme: { colors } }) => colors.primary};
        border: none;
        cursor: pointer;
    }

    .inp {
        height: 35px;
        border: 1px solid gray;
    }

    .inp:focus {
        border: 1px solid red;
    }
`;
