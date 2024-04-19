import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";

export function Home(){
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isactive />
                </li>
                <li>
                    <ButtonText title="React" />
                </li>
                <li>
                    <ButtonText title="Node" />
                </li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>

        </Container>
    )
}