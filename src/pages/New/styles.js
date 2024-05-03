import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        overflow-y: auto; 
        grid-area: content;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        margin-bottom: 36px;
        justify-content: space-between;

        button {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;