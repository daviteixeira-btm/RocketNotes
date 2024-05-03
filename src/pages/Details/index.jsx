import { Container, Links, Content } from "./styles";

import { useState, useEffect } from "react";
// Serve para buscar os parâmetros que existem em uma rota
import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tag";
import { ButtonText } from "../../Components/ButtonText";

import { api } from "../../services/api";

export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  // Função de voltar a página para o início
  function handleBack(){
    navigate("/");
  }

  // Função para excluir uma nota
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  // Usamos para buscar as informações da nota
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))
                }
              </Section>
            }

            <Button onClick={handleBack} title="Voltar" />
          </Content>
        </main>
      }
    </Container>
  )
}