import { Container } from "./styles"
import { Button } from "../../Components/Button"

export function Details(){
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Davi Teixeira</span>
      <Button title="Login" loading/>
    </Container>
  )
}