import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
