import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border: none;
    padding: 22px;
    margin-bottom: 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        flex: 1;
        font-size: 24px;
        text-align: left;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;