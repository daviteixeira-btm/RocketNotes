import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    height: 150px;
    padding: 16px;
    margin-bottom: 8px;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;