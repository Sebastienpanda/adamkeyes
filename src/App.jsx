import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { HeroBanner } from "./components/HeroBanner.jsx";
import { Projects } from "./components/Projects.jsx";
import { Technology } from "./components/Technology.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <main>
        <Technology />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
