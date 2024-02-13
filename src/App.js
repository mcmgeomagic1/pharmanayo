import { AboutUs } from "./Components/AboutUs";
import { Annoucment } from "./Components/Annoucment";
import { Categories } from "./Components/Categories";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Menu } from "./Components/Menu";
import { Services } from "./Components/Services";
import { Container } from "./styles/Container";
import { Main } from "./styles/common";

function App() {
  return (
    <Main>
      <header>
        <Menu/>
        <Container>
          <Header/>
        </Container>
      </header>
      <Categories/>
      <Container>
        <Services/>
      </Container>
      <Annoucment/>
      <AboutUs/>
      <Footer/>
    </Main>
  );
}

export default App;
