import Container from "./components/Container";
import Header from "./components/Header";
import Info from "./components/Info";
import Models from "./components/Models";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Header />
      <Container />
      <Info />
      <Models />
      <NewsLetter />
      <footer className="footer">
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
