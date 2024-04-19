import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > input {
        border: 0;
        width: 100%;
        height: 56px;
        padding: 12px;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;