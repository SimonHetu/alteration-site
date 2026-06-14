import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import FilmProjects from './components/FilmProjects';
import GameProjects from './components/GameProjects';
import ProjectDetailModal from './components/ProjectDetailModal';
import type { ProjectDetail } from './components/ProjectDetailModal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <div id="portfolio">
          <FilmProjects onProjectSelect={setSelectedProject} />
          <GameProjects onProjectSelect={setSelectedProject} />
          <Projects onProjectSelect={setSelectedProject} />
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default App;
