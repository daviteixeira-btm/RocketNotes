import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0;

    > h2 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`;