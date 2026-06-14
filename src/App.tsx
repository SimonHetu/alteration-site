import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import FilmProjects from './components/FilmProjects';
import GameProjects from './components/GameProjects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <FilmProjects />
        <GameProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
