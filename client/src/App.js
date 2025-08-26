// src/App.js
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Removed Navbar */}
      <Navbar/>

      <main className="pt-20">
        <Hero />

        {/* ABOUT placeholder (real content in the next step) */}
       <About/>

        {/* SKILLS placeholder */}
       <section id="skills">
        <Skills />
        </section>

        {/* CONTACT placeholder */}
      <Contact/>
      </main>
    </div>
  );
}

export default App;
