// index.tsx
import Header from './compoent/Header';
import About from './compoent/About';
import Skills from './compoent/Skills';
import Projects from './compoent/Projects';
import Services from './compoent/Services';
import Contact from './compoent/Contact';
import Footer from './compoent/Footer';
import './globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}