import { Outlet } from "react-router-dom";
import { Container, Footer, Header } from "../components";

function Body() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Body;