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
  const closed = true

  if(closed === true) {
    return <h3 style={{margin: "2em auto", width: "16.7%"}}>This website has been temporary paused</h3>
  }else{
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
}

export default App;
