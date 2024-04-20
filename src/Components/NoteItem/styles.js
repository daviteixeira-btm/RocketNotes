import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > input {
        width: 100%;
        height: 56px;
        border: none;
        padding: 12px;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;