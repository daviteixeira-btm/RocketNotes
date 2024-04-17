import styled from "styled-components";

export const Container = styled.button`
    border: 0;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    margin-top: 16px;
    font-weight: 500;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    &:disabled {
        opacity: 0.5;
    }
`;