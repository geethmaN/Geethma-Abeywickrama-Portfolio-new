import Navbar from "./components/Navbar.jsx";
import Reveal from "./components/Reveal.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      {/* ✅ Push content below fixed navbar */}
      <main style={{ paddingTop: 64 }}>
        <section id="home" className="scroll-mt-24">
          <Reveal y={18} duration={0.65} amount={0.25}>
            <Home />
          </Reveal>
        </section>

        <section id="about" className="scroll-mt-24">
          <Reveal y={22} duration={0.65} amount={0.2}>
            <About />
          </Reveal>
        </section>

        <section id="projects" className="scroll-mt-24">
          <Reveal y={22} duration={0.65} amount={0.2}>
            <Projects />
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-24">
          <Reveal y={22} duration={0.65} amount={0.2}>
            <Contact />
          </Reveal>
        </section>
      </main>
    </>
  );
}
