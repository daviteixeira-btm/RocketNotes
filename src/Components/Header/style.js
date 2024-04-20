import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    display: flex;
    height: 105px;
    padding: 0 80px;
    grid-area: header;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    justify-content: space-between;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        margin-left: 16px;
        line-height: 24px;
        flex-direction: column;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        font-size: 36px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;