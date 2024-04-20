import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    padding: 0 136px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        margin: 30px 0;
        font-size: 24px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 100px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background-size: cover;
    background: url(${backgroundImg}) no-repeat center center;
`;