import { LanguageProvider } from './context/LanguageProvider.jsx';
import { useReveal } from './hooks/useReveal.js';
import Background from './components/layout/Background.jsx';
import SkipLink from './components/layout/SkipLink.jsx';
import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import TechStack from './components/sections/TechStack.jsx';
import Projects from './components/sections/Projects.jsx';
import About from './components/sections/About.jsx';
import Contact from './components/sections/Contact.jsx';

/**
 * Composition root: wires the language provider, the fixed background and the
 * page structure together. It holds no business logic of its own.
 */
export default function App() {
  useReveal();

  return (
    <LanguageProvider>
      <SkipLink />
      <Background />
      <div className="shell">
        <Nav />
        <main id="content">
          <Hero />
          <TechStack />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
