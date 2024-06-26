import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;

    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    display: flex;
    grid-area: brand;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    padding-top: 64px;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > li {
        margin-bottom: 24px;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;
`;

export const Content = styled.div`
    padding: 0 64px;
    overflow-y: auto;
    grid-area: content;
`;

export const NewNote = styled(Link)`
    display: flex;
    grid-area: newnote;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    
    svg {
        margin-right: 8px;
    }
`;