import { Container, Links, Content } from "./styles"
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { ButtonText } from "../../Components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum molestiae 
            sunt totam eligendi repudiandae eos debitis repellendus tempora. Exercitationem 
            sunt modi voluptatum. Asperiores ea delectus cumque dicta deleniti aut.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}