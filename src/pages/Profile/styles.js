import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;
        display: flex;
        padding: 0 124px;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        svg {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: -95px auto 0;

    > div:nth-child(4){
        margin-top: 24px; 
    }
`;

export const Avatar = styled.div`
    width: 166px;
    height: 166px;
    position: relative;
    margin: 0 auto 32px;

    > img {
        width: 166px;
        height: 166px;
        border-radius: 50%;
    }

    > label {
        right: 7px;
        bottom: 7px;
        width: 48px;
        height: 48px;
        display: flex;
        cursor: pointer;
        position: absolute;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;